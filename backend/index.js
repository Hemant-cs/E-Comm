const express = require("express");
const app = express();
const Product = require("./DB/Products");

app.get("/", async(req, res)=>{
    // const allData = await Product.find();
    const result = await Product.find();
    res.send(result);
});

app.listen(8080);