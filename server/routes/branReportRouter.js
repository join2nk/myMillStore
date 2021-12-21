const express = require('express');
const  branReportController = require("../controllers/branReportController");

const router = express.Router();

router.get('/',branReportController.getHome)
router.post('/',branReportController.postBranReport)
router.get('/obj_id/:id',branReportController.edit)

module.exports = router;