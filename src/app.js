const express=require("express");
const app=express();
app.use("/route1",function(req,res){
    res.send("route1")
})
app.listen(3333,()=>{
    console.log("listening at 3333")
});