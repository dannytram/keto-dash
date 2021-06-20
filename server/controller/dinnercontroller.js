const model = require('../model/dinnermodel')
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

// function deleteFood(req, res) {
//   const { id } = req.params;
//   const deleteFoodItem = getBreakfast.findIndex(item => item.id === id)
//   getBreakfast.spice(deleteFoodItem, 1);
//   fs.writeFileSync('./data/breakfast.json');
//   res.status(201).json(getBreakfast)
// }

module.exports = { getDinnerInformation, addFood }
