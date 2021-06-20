const model = require('../model/breakfastmodel')
const { getBreakfast } = require('../model/breakfastmodel')
const fs = require('fs');

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


function deleteFood(req, res) {
  const { id } = req.params;
  const breakfastItems = getBreakfast()
  const deleteFoodItem = breakfastItems.findIndex(item => item.id === id)
  breakfastItems.splice(deleteFoodItem, 1);
  fs.writeFileSync('./data/breakfast.json', JSON.stringify(breakfastItems));
  res.status(201).json(breakfastItems)
}

module.exports = { getBreakfastInformation, addFood, deleteFood  }
