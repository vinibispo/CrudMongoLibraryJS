const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongodb = require('mongodb')

const app = express()
const Book = require('./database')

app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
mongoose.connect('mongodb://localhost/books', {useNewUrlParser: true})
const db = mongoose.connection
db.once('open', ()=>{
    console.log('Connected to MongoDB')
})
db.on('error', (err)=>{
    console.log(err)
})

app.get('/books', (req, res) => {
    Book.find({}, (err, book)=>{
        res.send(book)
    })
})

// req.body.id, req.body.description, req.body.title
app.post('/add', (req, res) =>{
    let book = new Book()
    book.title = req.body.title
    book.description = req.body.description
    book.save((err, doc) =>{
        if(err) res.json(err)
        res.send(`The book ${book.title} has been added in your library`)
    })
})

// req.body.id, req.body.description, req.body.title
app.post('/update', (req, res) =>{
    id = req.query.id
    Book.findByIdAndUpdate(id,(book)=>{
        book.title = req.query.title
        book.description = req.query.description
        res.send(book.title)
    })
})

// req.body.id
app.post('/delete', (req, res)=>{
    Book.findByIdAndDelete(req.body.id,(err)=>{
        if(err) res.json(err)
        res.send(`The book ${req.body.id} has been dropped in your library`)
    })
})

app.listen(4000, () => {
    console.log('Port at 4000...')
})


