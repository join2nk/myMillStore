const express = require("express")
const router = express.Router()


const loginCheck = require('../controllers/loginController').authenticateUser
// (req,res,next)=>{
//   let users =['nk','ramesh']
//   if(req.cookies.name in users)return res.redirect('/login')

//   next()
// }


//routes
const loginRouter = require('./login/loginRouter')

router.use('/login',loginRouter)


const branReoprtRouter = require('./bran/branReportRouter')
const gatemanRouter = require('./gateman/gatemanRouter')

router.use('/branreport',loginCheck, branReoprtRouter)
router.use('/gateman',loginCheck, gatemanRouter)


//controllers
const controller = require('../controllers/rootController')
router.get('/',loginCheck, controller.getRoot)


module.exports = router