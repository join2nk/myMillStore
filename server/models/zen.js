const mongoose = require("mongoose")

const QuotesSchema = new mongoose.Schema({
  quote:{type:String,required:true},
})

module.exports = mongoose.model("quote",QuotesSchema)