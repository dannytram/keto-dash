const model = require('../model/lunchmodel')

function getLunchInformation(req, res) {
  res.status(200).json(model.getLunch())
}

module.exports = { getLunchInformation }
