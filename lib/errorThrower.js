function errorThrower() {
    const err = new Error('Something went wrong')
    err.status = 400

    throw err
}

module.exports = errorThrower