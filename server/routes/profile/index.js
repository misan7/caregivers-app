const express = require('express')
const router = express.Router()

const updateProfile = require('./handlers/updateProfile')
const deleteProfile = require('./handlers/deleteProfile')

router.put('/:id', updateProfile)
router.delete('/:id', deleteProfile)

module.exports = router