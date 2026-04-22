const mongoose=require('mongoose');
async function connectDB(){
    await mongoose.connect('mongodb+srv://guneet:1U4EXaaL6tryQtuR@namastenode.0ba0su1.mongodb.net/devTinder');    
}
module.exports ={connectDB}