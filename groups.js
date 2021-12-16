/**

-gatepass no
-date
-broker [{}]
-party [{party name address bank ac details photo}]
-truck no []&non
-hemal []
-in time
-out time
-state [
  in by user at time,
  verified by user at time,
  loading/unloading by user at time,
  gatepass by user at time,
  out by user at time
]
-gatepassGroup- in out sate/fci/nonTradeOut purc/dmo/nonTradeIn   
-sauda:  sauda no

-billed -- items & rateCut & bardana & cgss 
--quantity bags qt others
--naration
--rate
-
items & rateCut & bardana & cgss 
quantity bags qt others
--naration
--rate
-other income and expenses
-naration
-hemal


*/
const { type } = require("express/lib/response")
const mongoose = require("mongoose")

const gatepass = new mongoose.Schema({
  gatepass_no:String,
  date:{type:Date,default:new Date.now},
  //-broker [{}]
  broker:String,
  //-party [{party name address bank ac details photo}]
  party:String,
  //-truck no []&non
  truck:String,
  //-hemal []
  hemal:String,
  state :String,
  gatepassGroup:String,
  sauda:Boolean,
  do_number_sauda_no:String,
  billDetails:{
    //wrong
    
  },
  

})

module.exports = mongoose.model("arwamillinglog",arwaPlantSchema)

/**


sauda
-sauda no
-type - sale purchase DO
-date
-broker
-party
-quantity 
-quantity type
-rate
-dilivary condition
-notes []
func pending()






payement and recites
-date
-type payemtn reciete journal
-from
-to/by
-against [{amoutn,gatepass}]
-naration



*/
