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
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            title: "Why do we use it",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            title: "Where can I get some?",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            title: "Where does it come from?",
            text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
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