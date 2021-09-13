const express = require('express')
const usersController = require('./UserController')
const assetsController = require('./AssetController')

// app initialization
const app = express()

// need to have this for express to parse json...
const bodyParser = require("body-parser");

/* app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json()); */
	
// Parsers for POST data
app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(express.json({limit: '20mb'}));


// adds the CRUD services
usersController(app)
assetsController(app)


const port = 3003
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
