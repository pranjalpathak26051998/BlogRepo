const express = require('express')
const app = express()
const route = require('./route/route')
const mongoose = require('mongoose')
require('dotenv').config();
console.log(process.env.PORT)
var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGOCONNECT).then(()=>console.log("mongoose is connected"))
.catch((e)=>{console.log("mongoose is not connected")})

app.use('/',route)


app.listen( 3000 ,function(){
    console.log(`THe server is running on port ${process.env.PORT}`)
})