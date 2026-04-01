//requirements
const express = require('express')
const dotenv = require('dotenv').config()
const expressApp = require('./src/express-app')

//inits
const app = express()
const PORT = process.env.PORT

expressApp(app)

app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}`)
})