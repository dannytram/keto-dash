const model = require('../model/dinnermodel')
const { getDinner } = require('../model/dinnermodel')
const fs = require('fs');

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

function deleteFood(req, res) {
  const { id } = req.params;
  const dinnerItems = getDinner()
  const deleteFoodItem = dinnerItems.findIndex(item => item.id === id)
  dinnerItems.splice(deleteFoodItem, 1);
  fs.writeFileSync('./data/dinner.json', JSON.stringify(dinnerItems));
  res.status(201).json(dinnerItems)
}


module.exports = { getDinnerInformation, addFood, deleteFood }
