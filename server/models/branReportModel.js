const mongoose = require("mongoose")

const branReportSchema = new mongoose.Schema({
  party: {
    type: String,
    required: true
  }, //from a list of bran partys
  broker: {
    type: String,
    required: true
  }, //from a list of bran broker
  logTime: {type:Date,default:new Date()},
  sampleDate:{
    type: Date,
    required: true
  },
  bags:{
    type: Number,
    required: true
  },
  branReport:Number,
  plantBranReport:Number,
  naration: String,
  user:String
})

module.exports = mongoose.model("branReport",branReportSchema)