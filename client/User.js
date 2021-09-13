class User {
    /**
     * Creates a new User
     * @param {string} username
     * @param {int} cash
     * @param {int | undefined} id
     * * @param {object} assets
     */
    constructor({username, cash, id, assets }) {
        this.username = username
        this.cash = cash
        this.id = id
        this.assets = assets
    }
}

module.exports = { User }