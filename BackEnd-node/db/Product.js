const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  catogary: String,
  price: String,
  userId:String
})

module.exports = mongoose.model('products',productSchema)