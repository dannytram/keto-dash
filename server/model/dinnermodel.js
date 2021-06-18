const fileSystem = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const dinner = path.join(__dirname, '../data/dinner.json')

function getDinner() {
  const dinnerData = fileSystem.readFileSync(dinner)
  return JSON.parse(dinnerData)
}

function addMeal(body) {
  const DinnerList = getDinner()
  const addedDinner = new Dinner(
    body.item,
    body.carbs,
    body.calories,
    body.fats,
    body.protein
  )
  DinnerList.push(addedDinner)
  fileSystem.writeFileSync(dinner, JSON.stringify(DinnerList))
  return DinnerList
}

function Dinner(item, carbs, calories, fats, protein) {
  this.id = uuidv4()
  this.item = item
  this.carbs = carbs
  this.calories = calories
  this.fats = fats
  this.protein = protein
}

module.exports = { getDinner, addMeal }
