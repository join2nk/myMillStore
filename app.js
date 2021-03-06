require("dotenv").config()
// const cookieParser = require("cookie-parser")
// const cors = require('cors')
const express = require("express")
const mongoose = require("mongoose")
const path = require('path')
const _ = require("lodash");

const app = express()

app.locals._ = _;

mongoose.connect(process.env.MONGODB, (e) => {if(e){console.log(e + '\n-----Error')}else{console.log("database connected nk")}})

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
// app.use(cors({  origin: '*'}))
// app.use(cookieParser())
app.set('view engine', 'ejs');

//home route
app.get('/', (req, res) => {
  // res.send(JSON.stringify({hello:"hello"}))
  res.render('home')
})
app.post('/', (req, res) => {
  // res.send(JSON.stringify({hello:"hello"}))
  res.redirect("/arwa")
})
const arwamillRouter = require(__dirname+"/server/routes/arwamillRoutes")
app.use('/arwa', arwamillRouter)

const gatepassRouter = require(__dirname+"/server/routes/gatepassRouter")
app.use('/gatepass', gatepassRouter)

const branReportRouter = require(__dirname+"/server/routes/branReportRouter")
app.use('/branreport', branReportRouter)

app.listen(process.env.PORT, ()=>console.log(`server setarted at port `))

app.use((req, res) => {
  res.send("<h2>error 404</h2>")
})