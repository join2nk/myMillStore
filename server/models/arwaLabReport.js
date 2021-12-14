const mongoose = require("mongoose")

const arwaLabReportSchema = new mongoose.Schema({
  date: {type:Date,default:new Date()},

  broken:{h:[{type:Number}],w1:[{type:Number}],w2:[{type:Number}],s1:[{type:Number}],paddy:[{type:Number}],pipe:[{type:Number}],dher:[{type:Number}]},
  threeForth:{pipe:[{type:Number}],dher:[{type:Number}]},
  
  naration: String
})

module.exports = mongoose.model("arwalabreport",arwaLabReportSchema)