const asyncHandler = require('express-async-handler')
const { faker } = require('@faker-js/faker');
var crypto = require('crypto')

const usersData = asyncHandler(async (req, res) => {
    const { country } = req.query
    const { seed } = req.query
    const { page } = req.query
    faker.locale = country
    faker.seed(Number(seed))
    let users = []
    for (i = 0; i < page * 20; i++) {
        let user = {
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            phone: faker.phone.phoneNumber(),
            address: {
                city: faker.address.cityName(),
                street: faker.address.streetAddress(true),
            }
        }
        users.push(user)
    }

    return res.json(users.slice(-20))
})

const randomNumber = asyncHandler(async (req, res) => {
    let number = crypto.randomBytes(4).readUInt32BE(0, true);
    return res.json(number)
})
module.exports = { usersData, randomNumber }