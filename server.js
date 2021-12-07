require("dotenv").config()
const express = require("express")
const ejs = require('ejs')
const mongoose = require("mongoose")

//express app
const app = express()

//connect to database
// -->mongoose.connect(uri)
 


app.use(express.json())
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static('./public'));

//application settings 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('arwamill', {})
})





app.listen('3000', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server running");
  }
})

app.use((req, res) => {
  res.send("<h2>error 404</h2>")
})