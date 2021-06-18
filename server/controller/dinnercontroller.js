const model = require('../model/dinnermodel')

function getDinnerInformation(req, res) {
  res.status(200).json(model.getDinner())
}

function addFood(req, res) {
  const newDinner = {
    item: req.body.name,
    carbs: req.body.carbs,
    calories: req.body.calories,
    fats: req.body.fats,
    protein: req.body.protein,
  }
  res.status(201).json(model.addMeal(newDinner))
}

module.exports = { getDinnerInformation, addFood }
