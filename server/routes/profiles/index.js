const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const addProfile = require('./handlers/addProfile')
const getProfileByLocation = require('./handlers/getProfilesByLocation')

router.get('/', getAll)
router.get('/:location', getProfileByLocation)
router.post('/', addProfile)

module.exports = router