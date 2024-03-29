const {shopModel} = require("../models/task.model")
const express = require("express")
const shopRouter = express.Router()

//read a task
shopRouter.get("/",async(req,res)=>{
    let q = req.query
    try {
        const product = await shopModel.find(q)
        res.status(200).send(product)
    } catch (error) {
        console.log(err);
		res.status(500).json({ error: true, message: "Something is wrong" });
    }
})



//create a task
shopRouter.post("/",async(req,res)=>{
    const data = req.body
    try {
        const product = new shopModel(data)
        await product.save()
        res.status(200).send({message:"Product added", product})
    } catch (error) {
        console.log(err);
		res.status(500).json({ error: true, message: "Something is wrong" });
    }
})


//update
shopRouter.patch("/:id", async(req,res)=>{
    let id = req.params.id
    const payload = req.body
    try {
    const newProduct =   await shopModel.findByIdAndUpdate({_id:id},payload)
    res.status(200).send({message:"Product updated", newProduct})
} catch (error) {
    console.log(err);
    res.status(500).json({ error: true, message: "Something is wrong" });
}
})



//delete
shopRouter.delete("/:id",async(req,res)=>{
    const id = req.params.id
    const payload = req.body
    try {
     await shopModel.findByIdAndDelete({_id:id},payload)
    res.status(200).send({message:"Product Deleted"})
} catch (error) {
    console.log(err);
    res.status(500).json({ error: true, message: "Something is wrong" });
}
})


module.exports = {shopRouter}