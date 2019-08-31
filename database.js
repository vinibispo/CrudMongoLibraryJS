const mongoose = require('mongoose')

const db = mongoose.connection


module.exports = {
    connect: mongoose.connect('mongodb://localhost/books', {useNewUrlParser: true}),
    once: db.once('open', ()=>{
        console.log('Connected to MongoDB')
    }),
    error: db.on('error', (err)=>{
        console.log(err)
    })
    
}