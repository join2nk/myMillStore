const MillingLogs = require("../models/arwaPlant")


// arwamill_index details creat_get creat_post !del 

const getarwamillhomepage = async(req, res) => {
  //connect to database and retrive data in var listOfLogs
  let logs =await MillingLogs.find({})
  console.log(logs)
  res.render("arwamill", {
    logs
  })
}

const postStatus = async (req,res)=>{
  console.log(req.body.millState);
  const millState = req.body.millState 
  const user = req.body.user
  const naration = req.body.millState 
  const newLog  = new MillingLogs({millState,user,naration})
  newLog.save(()=>console.log("saved"))
  res.redirect('/')
}

module.exports = {
  getarwamillhomepage,postStatus
};
