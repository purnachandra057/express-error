const errorThrower = require("./errorThrower")

function find() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
               errorThrower()
               resolve('User')
            }, 2000)
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = find