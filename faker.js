const { fake } = require('faker')
const faker = require('faker')
let about = []
let special = []
let client = []
let blog = []
for (let i = 0; i < 25; i++) {
    about.push({
        title: faker.date.past(),
        text: faker.lorem.text(),
    })
}
for (let i = 0; i < 10; i++) {
    special.push({
        
    })
}
for (let i = 0; i < 15; i++) {
    client.push({})
}
for (let i = 0; i < 5; i++) {
    blog.push({})
}
module.exports = { about, special, client, blog }