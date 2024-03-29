const mongoose = require("mongoose")

const shoppingSchema = mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    status:{type:Boolean, required:true},
},{timestamps:true})

const shopModel = mongoose.model("shopApp", shoppingSchema)

module.exports = {shopModel}