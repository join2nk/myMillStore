const express = require("express")
const router = express.Router()


const checklogin = (req,res,next)=>{
  if(req.cookies.name!='nk')return res.redirect('/login')
  next()
}


//routes
const branReoprtRouter = require('./bran/branReportRouter')
const loginRouter = require('./login/loginRouter')

router.use('/branreport',checklogin, branReoprtRouter)
router.use('/login',loginRouter)



//controllers
const controller = require('../controllers/rootController')
router.get('/', controller.getRoot)


module.exports = router