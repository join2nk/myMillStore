const express = require('express');
const  gatepassController = require("../controllers/gatepassController");

const router = express.Router();

router.get('/',gatepassController.getHome)

module.exports = router;