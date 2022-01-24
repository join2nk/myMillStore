const express = require('express');
const  gatemanController = require("../../controllers/gatemanController");

const router = express.Router();

router.get('/',gatemanController.getHome)
router.post('/',gatemanController.postgateman)
router.get('/obj_id/:id',gatemanController.edit)
router.post('/obj_id/:id',gatemanController.editPost)
router.post('/obj_id/del/:id',gatemanController.delPost)

router.get('/allin',gatemanController.getallin)
router.get('/kanta',gatemanController.getkanta)
router.get('/loadunload',gatemanController.getloadunload)


module.exports = router;