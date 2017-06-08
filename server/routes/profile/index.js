const express = require('express')
const router = express.Router()

const updateProfile = require('./handlers/updateProfile')
const deleteProfile = require('./handlers/deleteProfile')
const getProfile = require('./handlers/getProfile')


router.put('/:id', updateProfile)
router.delete('/:id', deleteProfile)
router.get('/:id', getProfile)

module.exports = router