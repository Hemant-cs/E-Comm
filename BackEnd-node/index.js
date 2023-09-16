const express = require("express")
require("./db/config")
const Users = require("./db/Users")
const cors = require("cors")
const Product = require("./db/Product")
const Jwt = require("jsonwebtoken")
const jwtKey = "e-comm"


const app = express()

app.use(express.json())
app.use(cors())

app.post("/sign-up", async (req, res) => {
  const user = new Users(req.body)
  let data = await user.save()
  data = data.toObject()
  delete data.password
  Jwt.sign({ data }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      res.send({ result: "something went wrong, Please try later" })
    } else {
      res.send({data,auth: token})
    }
  })
})

app.post("/login", async (req, res) => {
  if (req.body.email && req.body.password) {
    const user = await Users.findOne(req.body).select("-password")
    Jwt.sign({user},jwtKey,{expiresIn:'2h'},(err,token)=>{
      if(err){
      res.send({ result: "No user found....!!" })
      }
      else{
      res.send({user,auth:token})
      }
    })
  } else {
    res.send({ result: "No user found....!!" })
  }
})

app.post("/add", verifyToken,async (req, res) => {
  const product = new Product(req.body)
  const data = await product.save()
  if (data) {
    res.send(data)
  } else {
    res.send("invalid entry")
  }
})

app.get("/products",verifyToken, async (req, res) => {
  let products = await Product.find()
  if (products.length > 0) {
    res.send(products)
  } else {
    res.send({ result: "no product found" })
  }
})

app.delete("/delete/:id", verifyToken,async (req, res) => {
  let deleteProduct = await Product.deleteOne({ _id: req.params.id })
  res.send(
    deleteProduct.deletedCount === 1
      ? { deleteStatus: "Deleted successfully...!" }
      : { deleteStatus: "Product already deleted...!" }
  )
})

app.put("/update/:id",verifyToken ,async (req, res) => {
  let updateProduct = await Product.updateOne({ _id: req.params.id }, { $set: req.body })
  res.send(updateProduct)
})

app.get("/update/:id", verifyToken,async (req, res) => {
  let findProduct = await Product.findOne({ _id: req.params.id })
  if (findProduct) {
    res.send(findProduct)
  } else {
    res.send({ result: "No Record Found..!!" })
  }
})

app.get("/search/:key",verifyToken, async (req, res) => {
  let result = await Product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { brand: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { catogary: { $regex: req.params.key } },
    ],
  })
  res.send(result)
})

function verifyToken(req,res,next){
  let token = req.headers.authorization
  if(token){
    token = token.split(' ')[1]
    Jwt.verify(token,jwtKey,(err,valid)=>{
      if(err){
        res.status(401).send({result:'invalid token'})
      }else{
        next()
      }
    })
  }else{
    res.status(403).send({result : 'Unauthorized'})
  }
}

app.listen(5000)

// -------for testing---------

//const http = require("http");

// http.createServer((req,res)=>{
//   res.write('<h1>Hemant added nodemon and testing this side</h1>');
//   res.end;
// }).listen(4500);