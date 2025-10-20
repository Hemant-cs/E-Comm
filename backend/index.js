const express = require("express");
const app = express();
// since we are using JSON so we need to use this middleware
app.use(express.json());
const Product = require("./DB/Products");
const Users = require("./DB/Users");
//for CORS
const cors = require("cors");
app.use(cors());

//for getting all products
app.get("/", async(req, res)=>{
    try{
        const result = await Product.find();
        res.send(result);
    }catch(err){
        res.status(500).send({error:err})
    }
});

//for getting all users
app.get("/users", async(req, res)=>{
    try{
        const users = await Users.find({});
        res.send(users);
    }
    catch(err){
        res.status(500).send({error:err});
    }
})

//for signup
app.post("/signup", async(req, res)=>{
    try{
        const addingUser = new Users(req.body);
        const result = await addingUser.save();
        res.send(result);
        res.end();
    }
    catch(err){
        res.status(500).send({error:err});
    }
})

app.listen(8080);