const routes = require('express').Router()
const Book = require('./model')
routes.get('/books', (req, res) => {
    Book.find({}, (err, book)=>{
        res.send(book)
    })
})

routes.post('/add', (req, res) =>{
    let book = new Book()
    book.title = req.body.title
    book.description = req.body.description
    book.save((err, doc) =>{
        if(err) res.json(err)
        else res.send(`The book ${book.title} has been added in your library`)
    })
})

routes.post('/update', (req, res) =>{
    id = req.body.id
    Book.findByIdAndUpdate(id,{
        title: req.body.title,
        description: req.body.description
    },
    )
})

routes.post('/delete', (req, res)=>{
    Book.findByIdAndDelete(req.body.id,(err, book)=>{
        if(err){ 
            res.json(err)
        } else { 
            res.send(`The book ${req.body.id} has been dropped in your library`)
    }
    })
})

module.exports = routes