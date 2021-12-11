const mongoose = require("mongoose")

const KinSchema = new mongoose.Schema({
  sauda_no: Number,
  date: {
    type: Date,
    default: Date.now
  },
  gp_no: Number,
  broker: String,
  party: String,
  address: String,
  items: [], //bags itme name quality mc rateCut naration hemal calculatedWeight [lables : new old arwa usna bardana ]
  truck:String,
  

})

module.exports = mongoose.model("",KinSchema)