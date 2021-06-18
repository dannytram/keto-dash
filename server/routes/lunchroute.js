const express = require('express')
const router = express.Router()
const controller = require('../controller/lunchcontroller')

router.get('/', controller.getLunchInformation)

router.post('/', controller.addFood)

module.exports = router
