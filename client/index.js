const express = require('express')
const usersController = require('./usersController')
const assetsController = require('./assetsController')

// app initialization
const app = express()

// need to have this for express to parse json...
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// adds the CRUD services
usersController(app)
assetsController(app)


const port = 3003
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
