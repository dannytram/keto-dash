const fileSystem = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const lunch = path.join(__dirname, '../data/lunch.json')

function getLunch() {
  const lunchData = fileSystem.readFileSync(lunch)
  return JSON.parse(lunchData)
}

function addMeal(body) {
  const lunchList = getLunch()
  const addedLunch = new Lunch(
    body.item,
    body.carbs,
    body.calories,
    body.fats,
    body.protein
  )
  lunchList.push(addedLunch)
  fileSystem.writeFileSync(lunch, JSON.stringify(lunchList))
  return lunchList
}

function Lunch(item, carbs, calories, fats, protein) {
  this.id = uuidv4()
  this.item = item
  this.carbs = carbs
  this.calories = calories
  this.fats = fats
  this.protein = protein
}

module.exports = { getLunch, addMeal }
