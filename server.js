//requirements
const express = require('express')
const dotenv = require('dotenv').config()
const expressApp = require('./src/express-app')
const connectDB = require('./src/configs/db')

//inits
const app = express()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

expressApp(app)
connectDB(MONGO_URI)

app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}`)
})