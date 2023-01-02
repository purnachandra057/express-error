const express = require('express')
const userRouter = require('../routes/user')
const errorHandler = require('../middlewares/errorHandler')

const app = express()

app.use('/user', userRouter)

app.use(errorHandler)

module.exports = app