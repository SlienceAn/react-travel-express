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
app.get('/about', (req, res) => {
    res.status(200).send([
        {
            title: "What is Lorem Ipsum?",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pri"
        },
        {
            title: "Why do we use it",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
        },
        {
            title: "Where can I get some?",
            text: "There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, or randomised words which don't l"
        },
        {
            title: "Where does it come from?",
            text: "Contrary to popular belief Lorem Ipsum is not simply random text.It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard Mc"
        }
    ])
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