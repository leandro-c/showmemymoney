/**
 * Simple repository. The elements are going to be stored with an auto incremental int id
 */
 class AssetRepository {
    /**
     * Creates an empty repository
     */
    constructor() {
        this._repo = {}
        this._nextId = 0
    }

    /**
     * Retrieves all object from the repository
     * @return {Asset[]}
     */
    getAll() {
        return Object.values(this._repo)
    }

    /**
     * Returns the element for the given id
     * @param {int} id
     * @return {object}
     */
    get(id) {
        return this._repo[id]
    }

    /**
     * Stores a new entity
     * @param {object} entity
     * @return {object}
     */
    save(entity) {
        this._repo[this._nextId] = entity
        entity.id = this._nextId
        this._nextId++

        return entity
    }

    /**
     * Updates the database for the given entity
     * @param {object} entity
     * @return {object}
     */
    update(entity) {
        this._repo[entity.id] = entity
        return entity
    }

    /**
     * Deletes an object with the given id
     * @param {int} entityId
     */
    delete(entityId) {
        delete this._repo[entityId]
    }

    /**
     * Returns the element for the given name
     * @param {int} name
     * @return {Asset}
     */
    getByName(name) {
        return Object.values(this._repo).find(asset=>asset.name === name)
    }
}

module.exports = { AssetRepository }