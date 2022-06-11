const express = require('express')
const { usersData, randomNumber } = require('../controllers/usersControllers')

const router = express.Router()

router.get('/getUsers', usersData)
router.get('/getRandom', randomNumber)

module.exports = router;