const express = require('express');
const cors = require('cors');
const about = require('./faker')

const app = express();
app.use(cors())

app.get('/Special', (req, res) => {
    res.json()
})
app.get('/Client', (req, res) => {
    res.json()
})
app.get('/Blog', (req, res) => {
    res.json()
})
app.get('/About', (req, res) => {
    res.json(about)
})

app.listen(3000, () => {
    console.log('app is run in 3000')
})