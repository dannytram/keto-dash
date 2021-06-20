const express = require('express')
const router = express.Router()
const controller = require('../controller/breakfastcontroller')

router.get('/', controller.getBreakfastInformation)

router.post('/', controller.addFood)

router.delete('/:id', controller.deleteFood)

module.exports = router
