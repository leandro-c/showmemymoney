const { AssetRepository } = require("./AssetRepository");
const { AssetValidator } = require("./AssetValidator");
const { Asset } = require("./Asset");

/**
 * exports a function that given an application,
 * adds the routing for Asset CRUD
 * @param app
 */
module.exports = function(app) {
    const repository = new AssetRepository();
    const validator = new AssetValidator(repository)

    app.get('/asset', (req, res) => {
        // execute action
        const response = repository.getAll()

        // handle response
        res.send(response)
    })

    app.get('/asset/:id', (req, res) => {
        // get path params
        const id = req.params.id

        // execute action
        const asset = repository.get(id)

        // handle response
        if (asset) {
            res.send(asset)
        } else {
            res.status(404).send(`Asset with id ${id} not found.`)
        }
    })

    app.post('/asset', (req, res) => {
        // get body parameters
        const name = req.body.name
        const price = req.body.price

        // creates the asset
        const newAsset = new Asset({
            name: name,
            price: price,
            id: undefined
        })

        // validates the request
        const isValid = validator.validForCreate(newAsset)

        // handle response
        if (isValid) {
            // execute action
            const createdAsset = repository.save(newAsset)

            res.send(createdAsset)
        } else {
            res.status(400).send("Can't create two assets with the same name")
        }
    })

    app.put('/asset', (req, res) => {
        // get body parameters
        const payload = req.body

        // creates the Asset
        const assetToUpdate = new Asset({
            name: payload.name,
            price: payload.price,
            id: payload.id
        })

        // validates the request
        const isValid = validator.validForUpdate(assetToUpdate)

        // hand response
        if (isValid) {
            // execute action
            const createdAsset = repository.update(assetToUpdate)

            res.send(createdAsset)
        } else {
            res.status(404).send("Can't have two assets with the same name")
        }
    })

    app.delete('/asset/:id', (req, res) => {
        // get path parameters
        const id = req.params.id

        // execute action
        repository.delete(id)

        res.status(204).send()
    })
}