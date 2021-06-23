const model = require('../model/lunchmodel')
const { getLunch } = require('../model/lunchmodel')
const fs = require('fs');

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

function deleteFood(req, res) {
  const { id } = req.params;
  const lunchItems = getLunch()
  const deleteFoodItem = lunchItems.findIndex(item => item.id === id)
  lunchItems.splice(deleteFoodItem, 1);
  fs.writeFileSync('./data/lunch.json', JSON.stringify(lunchItems));
  res.status(201).json(lunchItems)
}


module.exports = { getLunchInformation, addFood, deleteFood }
