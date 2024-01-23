const express = require('express')
const router = express.Router()
const Controller = require('../controllers/UserController')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.get('/listuser', Controller.listUser)

module.exports = router