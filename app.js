require("dotenv").config()
const _ = require("lodash");
const http = require('http')
//const path = require('path')
// const cors = require('cors')
const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")


const app = express()
//so that i can use low dash in ejs views 
app.locals._ = _;

mongoose.connect(process.env.MONGODB, (e) => {if(e){console.log(e + '\n-----Error')}else{console.log("database connected nk")}})

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
// app.use(cors({  origin: '*'}))
app.use(cookieParser())
app.set('view engine', 'ejs');


// while useing cors in test for fetch api
// app.get('/json',(req,res)=>{
//   res.json ({hello:"hello"})
//   res.status(200)
// })
//home route
const root = require('./server/routers/index')
app.use('/',root) 



app.listen(process.env.PORT, ()=>console.log(`server setarted at port `))


app.use((req, res) => {res.send("<div style='font-size:150px'>  <a  href= '/'>back</a> ... </div><hr><h1>error 404</h1>")})
  