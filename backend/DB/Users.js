const mongoose = require("mongoose");
require("./ConnectDb");

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    }
})

module.exports =  mongoose.models.users || mongoose.model("users", userSchema);