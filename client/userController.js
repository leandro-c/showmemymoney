const { UserRepository } = require("./UserRepository");
const { UserValidator } = require("./UserValidator");
const { User } = require("./User");

/**
 * exports a function that given an application,
 * adds the routing for user CRUD
 * @param app
 */
module.exports = function (app) {
    const repository = new UserRepository();
    const validator = new UserValidator(repository)

    app.get('/user', (req, res) => {
        // execute action
        const response = repository.getAll()

        // handle response
        res.send(response)
    })

    app.get('/user/:id', (req, res) => {
        // get path params
        const id = req.params.id

        // execute action
        const user = repository.get(id)

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

        // validates the request
        const isValid = validator.validForCreate(newUser)

        // handle response
        if (isValid) {
            // execute action
            const createdUser = repository.save(newUser)

            res.send(createdUser)
        } else {
            res.status(400).send("Can't create two users with the same name")
        }
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
        // validates the request
        const isValid = validator.validForUpdate(userToUpdate)
        // hand response
        if (isValid) {
            // execute action
            const createdUser = repository.update(userToUpdate)
            res.send(createdUser)
        } else {
            res.status(404).send("Can't have two Users with the same name")
        }
    })
    app.put('/user/:id/deposit', (req, res) => {
        // get body parameters
        const payload = req.body
        // creates the user
        const userToUpdate = new User({
            cash: payload.cash,
        })
        // validates the request
        const isValid = validator.validForUpdate(userToUpdate)
        // hand response
        if (isValid) {
            // execute action
            const createdUser = repository.update(userToUpdate)
            res.send(createdUser)
        } else {
            res.status(404).send("Can't have two Users with the same name")
        }
    })

    app.put('/user/:id/buy', (req, res) => {
        // get body parameters
        const payload = req.body
        // creates the user
        const userToUpdate = new User({
            assets: payload.assets,
        })
        // validates the request
        const isValid = validator.validForUpdate(userToUpdate)
        // hand response
        if (isValid) {
            // execute action
            const createdUser = repository.update(userToUpdate)
            res.send(createdUser)
        } else {
            res.status(404).send("Can't have two Users with the same name")
        }
    })
    app.put('/user/:id/sell', (req, res) => {
        // get body parameters
        const payload = req.body
        // creates the user
        const userToUpdate = new User({
            assets: payload.assets,
        })
        // validates the request
        const isValid = validator.validForUpdate(userToUpdate)
        // hand response
        if (isValid) {
            // execute action
            const createdUser = repository.update(userToUpdate)
            res.send(createdUser)
        } else {
            res.status(404).send("Can't have two Users with the same name")
        }
    })

    app.delete('/user/:id', (req, res) => {
        // get path parameters
        const id = req.params.id

        // execute action
        repository.delete(id)

        res.status(204).send()
    })
}