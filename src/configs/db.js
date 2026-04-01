const mongoose = require('mongoose')

const connectDB = async (MONGO_URI) => {
    try {
        const connected = await mongoose.connect(MONGO_URI)
        if(connected){
            console.log('connected to the database')
        }else{
            console.log('failed to connect to the database')
        }
    } catch (error) {
        console.log('There was an error in connecting to the database: ', error)
    }
}

module.exports = connectDB