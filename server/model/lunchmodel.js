const fileSystem = require('fs')
const path = require('path')

const lunch = path.join(__dirname, '../data/lunch.json')

function getLunch() {
  const lunchData = fileSystem.readFileSync(lunch)
  return JSON.parse(lunchData)
}

module.exports = { getLunch }
