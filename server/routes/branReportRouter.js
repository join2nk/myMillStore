const express = require('express');
const  branReportController = require("../controllers/branReportController");

const router = express.Router();

router.get('/',branReportController.getHome)
router.post('/',branReportController.postBranReport)

module.exports = router;