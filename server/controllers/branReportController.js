const BranReport = require("../models/branReportModel.js")

// arwamill_index details creat_get creat_post !del 

const getHome = async (req, res) => {
  let logs = await BranReport.find({})  
  res.render("branreport",{logs})
}
const postBranReport = async (req, res) => {
  //let logs = await GateLogs.find({})  
  let [party,broker,logTime,sampleDate,bags,branReport,plantBranReport,naration,user] = [req.body.party,req.body.broker,req.body.logTime,req.body.sampleDate,req.body.bags,req.body.branReport,req.body.plantBranReport,req.body.naration,req.body.user]

   let report = new BranReport({party,broker,logTime,sampleDate,bags,branReport,plantBranReport,naration,user})
  
  report.save((err,report)=>{
    if (err){
      console.log(err);
    }else{
      res.redirect('/branreport');
    }
  })

  
}


module.exports = {
  getHome,
  postBranReport
};