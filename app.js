const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const data = require('./database')

const app = express()

app.use(express.static(path.join(__dirname,'frontend/dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(require('./routes'))

data.connect
data.once
data.error

module.exports = app