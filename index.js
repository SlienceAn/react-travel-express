const express = require('express');
const cors = require('cors');
const { json } = require('express')
const memberList = require('./faker')
const placeList = require('./faker')
const app = express();
app.use(cors()) //載入CORS允許跨域請求
app.use(json())
app.post('/user', (req, res) => {
    const { account, password } = req.body
    const response = memberList
        .filter(el => el.account === account)
        .filter(el => el.password === password)
    if (response.length === 0) {
        res.status(404).send('帳號錯誤')
    } else {
        res.json(response)
    }
})
app.get('/', (req, res) => {
    res.status(200).send("Get Express");
})
app.post('/sign', (req, res) => {
    const { account, password, mail, phone, address } = req.body
    console.log(req.body)
})
app.post('/place', (req, res) => {
    const { place, date } = req.body
    const response = placeList.filter(el => el.city === place)
    if (!response) {
        res.status(404).send('查無資料')
    } else {
        res.json(response)
    }
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('app is run in 3000')
})

module.exports = app;