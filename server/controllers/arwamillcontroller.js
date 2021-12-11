const MillingLogs = require("../models/arwaPlant")
let testData = [{millState:"not connected",user:"xyz",naration:"this is dest data"}]

// arwamill_index details creat_get creat_post !del 

const getarwamillhomepage = async(req, res) => {
  //connect to database and retrive data in var listOfLogs
  let logs = await MillingLogs.find({})  
  res.render("arwamill", {logs} )
}

const postStatus = (req,res)=>{
  const millState = req.body.millState 
  const user = req.body.user
  const naration = req.body.naration 
  
  const newLog  = new MillingLogs({millState,user,naration})

  newLog.save(()=>console.log("saved"))
  res.redirect('/')
}

module.exports = {
  getarwamillhomepage,
  postStatus
};
