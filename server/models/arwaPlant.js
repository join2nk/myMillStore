const mongoose = require("mongoose")

const arwaPlantSchema = new mongoose.Schema({
  millState: String, //on off mantainance
  logTime: {type:Date,default:+new Date() + 5.5*60*60*1000},
  naration: String,
  user:String
})

module.exports = mongoose.model("arwaPlant",arwaPlantSchema)