const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
    ,
    amount : {
        type: Number,
        required: true 
    },
    type : {
        type: String,
        enum: ['income', 'expense'] 
    },
    category: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        required: true 
    },
    notes: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('record', recordSchema)