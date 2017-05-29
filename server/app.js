const express = require('express')
const app = express()

// const PORT = process.env.PORT
const PORT = 3000

app.use(express.static('public'))

app.listen(PORT, () => console.log(`B-) Caregivers running on PORT ${PORT}`))