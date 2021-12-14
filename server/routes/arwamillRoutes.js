const express = require('express');
const  arwamillcontroller = require("../controllers/arwamillcontroller");
const  arwalabcontroller = require("../controllers/arwalabcontroller");

const router = express.Router();

router.get('/',arwamillcontroller.getarwamillhomepage)
router.post('/',arwamillcontroller.postStatus)

router.get('/lab',arwalabcontroller.getarwalabreportshome)
router.post('/lab',arwalabcontroller.postNewDayReport)
module.exports = router;