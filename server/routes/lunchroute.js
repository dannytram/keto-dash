const express = require('express')
const router = express.Router()
const controller = require('../controller/lunchcontroller')

router.get('/', controller.getLunchInformation)

module.exports = router
