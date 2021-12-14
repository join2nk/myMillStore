const LabReport = require("../models/arwaLabReport")


const getarwalabreportshome = async (req, res) => {

  let labLogs = await LabReport.find({})
  res.render("arwalab", {labLogs})

}

const postNewDayReport = async (req, res) => {
  res.redirect('/')
}

module.exports = {
  getarwalabreportshome,
  postNewDayReport
}