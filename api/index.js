import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
// import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.routes.js'

const app = express();
dotenv.config();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/blog-posts').then(()=>{
    console.log("connected to db");

}).catch((err)=>{
    console.log(err);
})


app.listen(3000,()=>{
    console.log('server running on port 3000')
})

// app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  })