const { Asset } = require("./Asset");

/**
 * exports a function that given an application,
 * adds the routing for Asset CRUD
 * @param app
 */
module.exports = function(app, assetRepository) {

    app.get('/asset', (req, res) => {
        // execute action
        const response = assetRepository.getAll()

        // handle response
        res.send(response)
    })

    app.get('/asset/:id', (req, res) => {
        // get path params
        const id = req.params.id

        // execute action
        const asset = assetRepository.get(id)

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

        const createdAsset = assetRepository.save(newAsset)
        res.send(createdAsset)
        
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

        const createdAsset = assetRepository.update(assetToUpdate)

        res.send(createdAsset)
    })

    app.delete('/asset/:id', (req, res) => {
        // get path parameters
        const id = req.params.id

        // execute action
        assetRepository.delete(id)

        res.status(204).send()
    })
}