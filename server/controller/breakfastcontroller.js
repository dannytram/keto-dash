const model = require('../model/breakfastmodel')

function getBreakfastInformation(_req, res) {
  res.status(200).json(model.getBreakfast())
}

function addFood(req, res) {
  const newBreakfast = {
    item: req.body.name,
    carbs: req.body.carbs,
    calories: req.body.calories,
    fats: req.body.fats,
    protein: req.body.protein,
  }
  res.status(201).json(model.addMeal(newBreakfast))
}

module.exports = { getBreakfastInformation, addFood }
