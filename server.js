//requirements
const express = require('express')
const dotenv = require('dotenv').config()

//inits
const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`The app is listening on port ${PORT}`)
})