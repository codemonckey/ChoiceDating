
const express = require('express')

const DateCtrl = require('../controllers/date-ctrl')

const router = express.Router()

router.post('/date', DateCtrl.createDate)
router.put('/date/:id', DateCtrl.updateDate)
router.delete('/date/:id', DateCtrl.deleteDate)
router.get('/date/:id', DateCtrl.getDateById)
router.get('/dates', DateCtrl.getDates)

module.exports = router