const GateLogs = require("../models/gatepassModel.js")

// arwamill_index details creat_get creat_post !del 

const getHome = async(req, res) => {
  //connect to database and retrive data in var listOfLogs
  let logs = await GateLogs.find({})  
  res.render("gateapp", {logs} )
}



module.exports = {
  getHome
};
