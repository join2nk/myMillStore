const express = require('express');
const  arwamillcontroller = require("../controllers/arwamillcontroller");

const router = express.Router();

router.get('/',arwamillcontroller.getarwamillhomepage)
router.post('/',arwamillcontroller.postStatus)


module.exports = router;