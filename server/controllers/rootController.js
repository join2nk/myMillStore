// const MillingLogs = require("../models/arwaPlant")

// arwamill_index details creat_get creat_post !del 

const getRoot = (req, res) => { 
  // res.redirect("/branreport")
  res.render("index",{title:'Dashboard',titlehref:'/',user:req.user.userName})
}


module.exports = {
  getRoot
};
