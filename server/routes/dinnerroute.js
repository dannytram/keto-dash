const express = require('express')
const router = express.Router()
const controller = require('../controller/dinnercontroller')

router.get('/', controller.getDinnerInformation)

router.post('/', controller.addFood)

module.exports = router
