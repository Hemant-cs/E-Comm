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
        req.body.email = req.body.email.toLowerCase();
        const addingUser = new Users(req.body);
        const result = await addingUser.save();
        res.send(result);
        res.end();
    }
    catch(err){
        res.status(500).send({error:err});
    }
})

//for login
app.post("/login",async(req, res)=>{
    try{
        const user = await Users.findOne({email:req.body.email});
        if(user){
            if(user.password == req.body.password){
                res.send({status:200, userDetails : {email : user.email, fullName : user.fullName}});
            }else{
                res.status(400).send({status:400, message : "Entered Password is wrong!"});
            }
        }else{
            res.status(400).send({status:400, message : "Entered Email is wrong!"});
        }
    }
    catch(err){
        res.status(500).send({error:err});
    }
})

app.listen(8080);