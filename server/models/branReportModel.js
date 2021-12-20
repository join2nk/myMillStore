const mongoose = require("mongoose")

const branReportSchema = new mongoose.Schema({
  party: String, //from a list of bran partys
  broker: String, //from a list of bran broker
  logTime: {type:Date,default:new Date()},
  sampleDate:Date,
  bags:Number,
  branReport:Number,
  plantBranReport:Number,
  naration: String,
  user:String
})

module.exports = mongoose.model("branReport",branReportSchema)