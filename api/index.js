import express from 'express'
import mongoose from 'mongoose'
const app = express();

mongoose.connect('mongodb://localhost:27017/blog-posts').then(()=>{
    console.log("connected to db");

}).catch((err)=>{
    console.log(err);
})


app.listen(3000,()=>{
    console.log('server running on port 3000')
})