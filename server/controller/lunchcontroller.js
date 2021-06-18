const model = require('../model/lunchmodel')

function getLunchInformation(req, res) {
  res.status(200).json(model.getLunch())
}

function addFood(req, res) {
  const newLunch = {
    item: req.body.name,
    carbs: req.body.carbs,
    calories: req.body.calories,
    fats: req.body.fats,
    protein: req.body.protein,
  }
  res.status(201).json(model.addMeal(newLunch))
}

module.exports = { getLunchInformation, addFood }
