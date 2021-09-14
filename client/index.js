const express = require('express')
const usersController = require('./UserController')
const assetsController = require('./AssetController')
const { UserRepository } = require("./UserRepository");
const { AssetRepository } = require("./AssetRepository");
// app initialization
const app = express()

app.use(express.urlencoded({ extended: true, limit: '20mb' }));
app.use(express.json({limit: '20mb'}));
const userRepository = new UserRepository();
const assetRepository = new AssetRepository();

// adds the CRUD services
usersController(app, assetRepository, userRepository)
assetsController(app, assetRepository)


const port = 3003
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
