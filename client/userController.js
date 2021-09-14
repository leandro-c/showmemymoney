const { User } = require("./User");

/**
 * exports a function that given an application,
 * adds the routing for user CRUD
 * @param app
 */

module.exports = function (app, assetRepository, userRepository) {

    app.get('/user', (req, res) => {
        // execute action
        const response = userRepository.getAll()

        // handle response
        res.send(response)
    })

    app.get('/user/:id', (req, res) => {
        // get path params
        const id = req.params.id

        // execute action
        const user = userRepository.get(id)

        // handle response
        if (user) {
            res.send(user)
        } else {
            res.status(404).send(`User with id ${id} not found.`)
        }
    })

    app.post('/user', (req, res) => {
        // get body parameters
        const username = req.body.username
        const cash = req.body.cash
        const assets = req.body.assets
        // creates the user
        const newUser = new User({
            username: username,
            cash: cash,
            assets: assets,
            id: undefined
        })

        // handle response
        const createdUser = userRepository.save(newUser)

        res.send(createdUser)
        
    })

    app.put('/user/', (req, res) => {
        // get body parameters
        const payload = req.body
        // creates the user
        const userToUpdate = new User({
            username: payload.username,
            cash: payload.cash,
            assets: payload.assets,
            id: payload.id
        })

        const createdUser = userRepository.update(userToUpdate)
        res.send(createdUser)
        
    })
    app.put('/user/:id/deposit', (req, res) => {
        // get body parameters
        const payload = req.body
        const user = userRepository.get(req.body.id)
        user.cash += payload.cash

        const createdUser = userRepository.update(user)
        res.send(createdUser)
    
    })

    app.put('/user/:id/buy', (req, res) => {
        // get body parameters
        const payload = req.body
        const user = userRepository.get(req.params.id)
        if(user.assets[payload.nameAsset]){
            user.assets[payload.nameAsset] = user.assets[payload.nameAsset] + payload.quantity
        }else{
            user.assets[payload.nameAsset] = payload.quantity   
        }
        
        const asset = assetRepository.getByName(payload.nameAsset)
        user.cash = user.cash - payload.quantity * asset.price;

        const createdUser = userRepository.update(user)
        res.send(createdUser)
        
    })
    app.put('/user/:id/sell', (req, res) => {
        const payload = req.body
        const user = userRepository.get(req.params.id)
        if(user.assets[payload.nameAsset]){
            user.assets[payload.nameAsset] = user.assets[payload.nameAsset] - payload.quantity
        }else{
            throw new Error()
        }
        
        const asset = assetRepository.getByName(payload.nameAsset)
        user.cash = user.cash + payload.quantity * asset.price;

        const createdUser = userRepository.update(user)
        res.send(createdUser)
    })

    app.delete('/user/:id', (req, res) => {
        // get path parameters
        const id = req.params.id

        // execute action
        userRepository.delete(id)

        res.status(204).send()
    })
}