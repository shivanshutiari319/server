const express = require('express')
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const router = require('./routes/Router.js')
const path = require('path')
const cors = require('cors')
app.use(cors());
const bodyparser= require('body-parser');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))

dotenv.config();

const PORT=process.env.PORT||5000;

app.use('/signup',router);

app.get('/',(req,res)=>{
    res.send("get method ready");
    
    })
// import React from 'react';



mongoose.connect("mongodb://shivanshu:trisha@cluster0-shard-00-00.tdefa.mongodb.net:27017,cluster0-shard-00-01.tdefa.mongodb.net:27017,cluster0-shard-00-02.tdefa.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2o0qu0-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    
app.listen(PORT,(req,res)=>{
    // res.send(database connected)

    console.log("databse coonected");
})

})
.catch((err)=>{
   console.log(err);

})







