const fileSystem = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const breakfast = path.join(__dirname, '../data/breakfast.json')

function getBreakfast() {
  const breakfastData = fileSystem.readFileSync(breakfast)
  return JSON.parse(breakfastData)
}

function addMeal(body) {
  const breakfastList = getBreakfast()
  const addedBreakfast = new Breakfast(
    body.item,
    body.carbs,
    body.calories,
    body.fats,
    body.protein
  )
  breakfastList.push(addedBreakfast)
  fileSystem.writeFileSync(breakfast, JSON.stringify(breakfastList))
  return breakfastList
}

function Breakfast(item, carbs, calories, fats, protein) {
  this.id = uuidv4()
  this.item = item
  this.carbs = carbs
  this.calories = calories
  this.fats = fats
  this.protein = protein
}

module.exports = { getBreakfast, addMeal }
