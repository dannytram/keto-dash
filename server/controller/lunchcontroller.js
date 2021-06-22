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

function deleteFood(req, res) {
  const { id } = req.params;
  const dinnerItems = getDinner()
  const deleteFoodItem = dinnerItems.findIndex(item => item.id === id)
  dinnerItems.splice(deleteFoodItem, 1);
  fs.writeFileSync('./data/dinner.json', JSON.stringify(dinnerItems));
  res.status(201).json(dinnerItems)
}


module.exports = { getLunchInformation, addFood, deleteFood }
