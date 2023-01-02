const express = require('express')
const find = require('./user')

const app = express()

app.get('/', async (req, res, next) => {
    const user = await find()
    res.json({ user })
})

app.use((err, req, res, next) => {
    if (res.headersSent)
        next(err)
    res.status(err.status || 500)
    res.json({
        error: err.message
    })
})

app.listen(3000, () => {
    console.log('running...')
})