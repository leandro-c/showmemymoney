class Asset {
    /**
     * Creates a new Asset
     * @param {string} name
     * @param {int} price
     * @param {int | undefined} id
     */
    constructor({name, price, id }) {
        this.name = name
        this.price = price
        this.id = id
    }
}

module.exports = { Asset }