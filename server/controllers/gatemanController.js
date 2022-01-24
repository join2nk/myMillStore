const BranReport = require("../models/branReportModel.js")

// arwamill_index details creat_get creat_post !del 

const getHome = async (req, res) => {
  // let logs = await BranReport.find({})  
  res.render("gateman/gateman",{logs:[],title:'Gateman',user:req.user.userName})
}
const getallin = async (req, res) => {
  // let logs = await BranReport.find({})  
  res.render("gateman/allin",{logs:[],title:'All In',user:req.user.userName})
}
const getkanta = async (req, res) => {
  // let logs = await BranReport.find({})  
  res.render("gateman/kanta",{logs:[],title:'Kanta',user:req.user.userName})
}
const getloadunload = async (req, res) => {
  // let logs = await BranReport.find({})  
  res.render("gateman/loadunload",{logs:[],title:'Load Unload',user:req.user.userName})
}
const postgateman = async (req, res) => {
  // //let logs = await GateLogs.find({})  
  // let {refno,party,broker,logTime,sampleDate,bags,branReport,plantBranReport,naration,user} = req.body

  //  let report = new BranReport({refno,party,broker,logTime,sampleDate,bags,branReport,plantBranReport,naration,user})
  
  // report.save((err,report)=>{
  //   if (err){
  //     console.log(err);
  //   }else{
  //     res.redirect('/branreport');
  //   }
  // })

  
}
const edit = async (req, res) => {
  // let _id = req.params.id
  // let logs = await BranReport.find({_id})  
  // res.render("bran/editbyid",{logs})
}
const editPost = async (req, res) => {
  // let {refno,party,broker,logTime,sampleDate,bags,branReport,plantBranReport,naration,user} = req.body
  
  // let _id = req.params.id
  // await BranReport.updateOne({_id:{$eq:_id}},{refno,party,broker,logTime,sampleDate,bags,branReport,plantBranReport,naration,user}) 
  // res.redirect('/branreport');

}
const delPost = async (req, res) => {
  //let [refno,party,broker,logTime,sampleDate,bags,branReport,plantBranReport,naration,user] = [req.body.refno,req.body.party,req.body.broker,req.body.logTime,req.body.sampleDate,req.body.bags,req.body.branReport,req.body.plantBranReport,req.body.naration,req.body.user]
  
  // let _id = req.params.id
  // await BranReport.deleteOne({_id:{$eq:_id}}) 
  // res.redirect('/branreport');

}

module.exports = {
  getHome,
  getallin,
  getkanta,
  getloadunload,
  postgateman,
  edit,
  editPost,
  delPost
};