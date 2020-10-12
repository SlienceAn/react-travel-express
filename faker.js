const { fake } = require('faker')
const faker = require('faker')
const memberList = [
    { account: 'react', password: 'react' },
    { account: 'redux', password: 'redux' },
    { account: 'test', password: 'test' },
]
let placeList = []
function cityRandom() {
    let city = ['台北', '桃園', '新竹', '台中', '台南', '高雄', '台東', '花蓮', '嘉義', '宜蘭']
    let i = (parseInt(Math.random() * 10))
    return city[i]
}
for (let i = 0; i < 60; i++) {
    placeList.push({
        placeimg: "https://picsum.photos/300/200?random=" + i,
        name: faker.lorem.lines(),
        text: faker.lorem.paragraph(),
        city: cityRandom()

    })
}
module.exports = memberList
module.exports = placeList