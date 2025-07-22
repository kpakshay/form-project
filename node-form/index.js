// const express=require('express')
// const connect= require('./mongodb/mongoclient')
import express from "express"
import connect from "./mongodb/mongoclient.js";
import userRoutes from "./routes/userRoutes.js";
import cors from 'cors';

const app= express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connect()
console.log("Hi")
app.use('/', userRoutes)


app.listen(3000,()=>{
    console.log("App listeniing to port 3000")
})
