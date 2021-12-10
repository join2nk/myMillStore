require("dotenv").config()
const cors = require('cors')
const express = require("express")
const mongoose = require("mongoose")


//express app
const app = express()

//connect to database
mongoose.connect(process.env.MONGODB, () => console.log("database connected nk"))

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}));

app.use(express.static('./public'));

app.use(cors({  origin: '*'}))

app.set('view engine', 'ejs');

//home route
app.get('/', (req, res) => {
  // res.send(JSON.stringify({hello:"hello"}))
  res.redirect("/arwa")
})

const arwamillRouter = require("./routes/arwamillRoutes")
app.use('/arwa', arwamillRouter)


app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("server running");
  }
})

app.use((req, res) => {
  res.send("<h2>error 404</h2>")
})