const mongoose = require("mongoose")

const branReportSchema = new mongoose.Schema({
  refno:Number,
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
    required: true,
    default:new Date
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