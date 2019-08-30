const mongoose = require('mongoose')
const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Book', bookSchema)