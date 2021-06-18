const model = require('../model/dinnermodel')

function getDinnerInformation(req, res) {
  res.status(200).json(model.getDinner())
}

module.exports = { getDinnerInformation }
