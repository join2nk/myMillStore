const express = require('express');
const  loginController = require("../../controllers/loginController");

const router = express.Router();

router.get('/',loginController.getlogin)
router.post('/',loginController.loginpost)
router.get('/logout/',loginController.logout)

// router.get('/obj_id/:id',loginController.edit)//route not used



module.exports = router;