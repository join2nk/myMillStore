const mongoose = require("mongoose");

const enums = {
  itemType:['usna','arwa','bardana','others'],
  itemCategory:['rice','paddy','brna','broken','rejection','rafi','bhusi','bhusa','silky-brna','others'],
}
function defaultrate (hemal,work){
  console.log(hemal +" "+ work)
  return hemal
}

const GateLogsSchema = new mongoose.Schema({
  // _id:
  inDate:{type:Date,default:new Date()},
  inby:String,
  type:{type:String,enum:['kisani in','bill in','out','other out','fci','dmo']},
  truckNo:{type:String},
  broker:String,
  party:String,
  inNarration:String,
  bags_inNote:Number,

  outDate:Date,
  outby:Date,
  gatepassNo:Number,
  gatepassType:{type:String},
  
  kanta:{rstno:Number,kantainitial:{wt:Number,at:Date,by:String},kantafinal:{wt:Number,at:Date,by:String},out_note:String,},
  
  loading:Boolean,
  items:[{
    itemType:{type:String,
      enum:enums.itemType,
      default:'others'},
    itemCategory:{type:String,
      enum:enums.itemCategory,
      default:'others'},
    from:String,//godown1,2,fad
    itemname:String,
    itemNameNarration:String,
    mc:Number,
    bags:Number,
    rate:Number,
    itemNarration:String,
    //wt calculated
    //amount
    //hemali
    hemal:String,
    hemalwork:String,  
    hemalrate:{type:Number},
    hemalNaration:String  

  }]

})




module.exports = mongoose.model('gatelog',GateLogsSchema) 