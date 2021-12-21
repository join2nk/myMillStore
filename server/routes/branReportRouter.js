const express = require('express');
const  branReportController = require("../controllers/branReportController");

const router = express.Router();

router.get('/',branReportController.getHome)
router.post('/',branReportController.postBranReport)
router.get('/obj_id/:id',branReportController.edit)
router.post('/obj_id/:id',branReportController.editPost)
router.post('/obj_id/del/:id',branReportController.delPost)

module.exports = router;