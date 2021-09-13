class UserValidator {
    constructor(repository) {
        this._repository = repository
    }

    /**
     * Validates that there's no one with the same name.
     * @param {User} newUser
     * @return {Boolean}
     */
    validForCreate(newUser) {
        return !this._repository.getAll().some(user => user.username === newUser.username)
    }

    /**
     * Validates that there's no user with the same name and different id
     * @param {User} updatedUser
     * @return {boolean}
     */
    validForUpdate(updatedUser) {
        return !this._repository.getAll().some(user => user.username === updatedUser.username && user.id !== updatedUser.id)
    }
}

module.exports = { UserValidator }