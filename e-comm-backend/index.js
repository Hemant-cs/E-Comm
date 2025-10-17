const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("your backend is working....");
});

app.listen(8080);