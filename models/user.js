const errorThrower = require("../lib/errorThrower")

function find() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                errorThrower()
                resolve('User')
            } catch (err) {
                reject(err)
            }
        }, 2000)
    })
}

module.exports = find