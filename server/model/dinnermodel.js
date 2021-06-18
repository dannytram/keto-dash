const fileSystem = require('fs')
const path = require('path')

const dinner = path.join(__dirname, '../data/dinner.json')

function getDinner() {
  const dinnerData = fileSystem.readFileSync(dinner)
  return JSON.parse(dinnerData)
}

module.exports = { getDinner }
