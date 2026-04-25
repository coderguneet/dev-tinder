const express=require("express");
const app=express();
const {connectDB}=require('./config/database');
const User=require("./models/user.js");
const { default: mongoose } = require("mongoose");
app.use(express.json());
app.get("/feed/:emailId",async(req,res)=>{
    const email=req.params.emailId
    try{
        const record= await User.find({emailId: email});
        res.send(record);
    }
    catch(err){
        res.status(400).send("error while displaying user"+err.message);
    }
})
app.delete("/remove",async (req,res)=>{
        try{
            const id= req.body.userId
            await User.findByIdAndDelete(id)
            res.send("deleted user with id:" + id);
    }
    catch(err){
        res.status(400).send("error while removing user"+err.message);
    }
})
app.post("/signup",async(req,res)=>{
    const user=new User(req.body);
    try{
        await user.save();
        res.send("user added sucessfully");
    }
    catch(err){
        res.status(400).send("error while adding user"+err.message);
    }
});
app.patch("/update",async(req,res)=>{
    id=req.body._id;
    try{
        await User.findByIdAndUpdate(id,req.body)
        res.send("updated")
    }
    catch(err){
        res.status(400).send("error while updating user"+err.message);
    }
})



connectDB()
.then(()=>{
    console.log('Database Connected');
    app.listen('3333',()=>{
        console.log("listening to 3333")
    })
})
.catch((err)=>{
    console.log('cannot connect to database');
})