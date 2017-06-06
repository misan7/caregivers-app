const express = require('express')
const router = express.Router()

const updateProfile = require('./handlers/updateProfile')
const deleteProfile = require('./handlers/deleteProfile')

router.put('/', updateProfile)
router.delete('/', deleteProfile)

module.exports = router