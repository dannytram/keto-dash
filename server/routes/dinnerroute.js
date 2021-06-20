const express = require('express')
const router = express.Router()
const controller = require('../controller/dinnercontroller')

router.get('/', controller.getDinnerInformation)

router.post('/', controller.addFood)

router.delete('/:id', controller.deleteFood)

module.exports = router
