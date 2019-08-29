const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,'dist')))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(4000, () => {
    console.log('Port at 4000...')
})
