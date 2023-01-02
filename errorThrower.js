function errorThrower() {
    const err = new Error('Something went wrong')
    err.status = 404

    throw err
}

module.exports = errorThrower