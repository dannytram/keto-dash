const express = require('express')
const server = express()
const request = require('request')
const cors = require('cors')
const port = 8080
const breakfast = require('./routes/breakfastroute')
const lunch = require('./routes/lunchroute')
const dinner = require('./routes/dinnerroute')

//Middlewear
server.use(express.json())
server.use(cors())

server.use('/breakfast', breakfast)
server.use('/lunch', lunch)
server.use('/dinner', dinner)

server.get('/', (req, res) => {
  res.send('<h1> 🥑🥑🥑🥑🥑🥑🥑 KETO DASH API 🥑🥑🥑🥑🥑🥑🥑</h1>')
})

server.listen(port, () => {
  console.log(`Sever is listening on ${port}`)
})
