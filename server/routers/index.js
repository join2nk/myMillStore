const express = require("express")
const router = express.Router()

//routes
const branReoprtRouter = require('./bran/branReportRouter')

router.use('/branreport', branReoprtRouter)



//controllers
const controller = require('../controllers/rootController')
router.get('/', controller.getRoot)


module.exports = router