class AssetValidator {
    constructor(repository) {
        this._repository = repository
    }

    /**
     * Validates that there's no one with the same name.
     * @param {Asset} newAsset
     * @return {Boolean}
     */
    validForCreate(newAsset) {
        return !this._repository.getAll().some(asset => asset.name === newAsset.name)
    }

    /**
     * Validates that there's no Asset with the same name and different id
     * @param {Asset} updatedAsset
     * @return {boolean}
     */
    validForUpdate(updatedAsset) {
        return !this._repository.getAll().some(asset => asset.name === updatedAsset.name && asset.id !== updatedAsset.id)
    }
}

module.exports = { AssetValidator }