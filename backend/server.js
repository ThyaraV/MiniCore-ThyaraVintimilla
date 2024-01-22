import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import grades from './data/grade.js';
import users from './data/student.js';

const port=process.env.PORT ||5000;

connectDB();

const app=express();

app.get('/',(req,res)=>{
    res.send('API is running...')
});

app.get('/api/grades',(req,res)=>{
    res.json(grades);
});

app.get('/api/users',(req,res)=>{
    res.json(users);
});

app.listen(port,()=>console.log(`Server running on port ${port}`));