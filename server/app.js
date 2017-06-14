const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesProfiles = require('./routes/profiles')
const routesProfile = require('./routes/profile')

const routesAuth = require('./routes/auth')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))

app.use('/api/profiles', routesProfiles)
app.use('/api/profile', routesProfile)

app.use('/', routesAuth)

module.exports = app