const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesProfiles = require('./routes/profiles')
const routesProfile = require('./routes/profile')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client')))

app.use('/profiles', routesProfiles)
app.use('/profile', routesProfile)

module.exports = app