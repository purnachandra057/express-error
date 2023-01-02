const express = require('express')
const asyncWrapper = require('../lib/asyncWrapper')
const find = require('../models/user')
const router = express.Router()

router.get('/', asyncWrapper(async (req, res, next) => {
    const user = await find()
    res.json({ user })
}))

router.get('/new', (req, res, next) => {
    res.send('Create new user')
})

module.exports = router