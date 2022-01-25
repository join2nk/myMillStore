const gatelogs = require("../models/gatelogs.js");

// arwamill_index details creat_get creat_post !del 

// var new_user = new gatelogs({
//   truckNo:'cg04jh4420',
//   broker: 'Manish',
//   party:34,
//   items:[{itemType:'others',hemal:'raju',hemalwork:'truck-to-haudi'},{itemType:'others',hemal:'raju',hemalwork:'truck-to-stack'}]
// })

// new_user.save(function(err,result){
//   if (err){
//       console.log(err);
//   }
//   else{
//       console.log(result)
//   }
// })


const getHome = async (req, res) => {
  // let logs = await BranReport.find({})  
  let lastin = await gatelogs.findOne({}) ||'no entry'
  let lastout = await gatelogs.findOne({outData:{$eq:null}})
  
  let logs = [{lastin,lastout}]
  res.render("gateman/gateman",{logs:logs,title:'Gateman',user:req.user.userName})
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