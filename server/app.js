const express = require("express")
let request = require("request")
const app = express()
const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/dashboard", (req, res) => {
    request('https://api.edamam.com/api/nutrition-data?app_id=bc0b3d95&app_key=%20d31b2e3e059682d95464fdba90dbace8&nutrition-type=logging&ingr=egg', function (error, response, body) {
        if (error && response.statusCode == 200) {
            console.log(body)
        }
    })
})

app.listen(port, () => console.log(`Listening on ${port}`))