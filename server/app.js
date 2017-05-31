const express = require('express')
const path = require('path')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT

app.use(express.static(path.join(__dirname, '../client')))

app.listen(PORT, () => console.log(`B-) Caregivers running on PORT ${PORT}`))
