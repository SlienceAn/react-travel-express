const express = require('express');
const cors = require('cors');
const about = require('./faker')
const app = express();
app.use(cors())

app.get('/Special', (req, res) => {
    res.json({ name: '測試', text: 'special' })
})
app.get('/Client', (req, res) => {
    res.json({ name: '測試', text: 'client' })
})
app.get('/Blog', (req, res) => {
    res.json({ name: '測試', text: 'blog' })
})
app.get('/About', (req, res) => {
    res.json(about)
})

app.listen(3000, () => {
    console.log('app is run in 3000')
})