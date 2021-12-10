const mongoose = require("mongoose")

const arwaPlantSchema = new mongoose.Schema({
  millState: String, //on off mantainance
  logTime: {type:Date,default:Date.now},
  naration: String,
  user:String
})

module.exports = mongoose.model("arwaPlant",arwaPlantSchema)