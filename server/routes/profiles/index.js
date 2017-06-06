const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addProfile = require('./handlers/addProfile')

router.get('/', getAll)
router.post('/', addProfile)

module.exports = router