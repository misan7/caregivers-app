const express = require('express')
const router = express.Router()

// const addPizza = require('./handlers/addPizza')
const getAll = require('./handlers/getAll')

router.get('/', getAll)
// router.post('/', addPizza)

module.exports = router