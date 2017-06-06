require('dotenv').load()

global.__base = __dirname + '/server/'

const app = require('./server/app')
const db = require('./server/config/db')

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 3000

console.log(`Connecting to ${DB_URL}...`)

db.open(DB_URL)
app.listen(PORT)

console.log(`Listening on port ${PORT}...`)