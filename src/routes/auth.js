'use stric'

const { Router } = require('express')
const authRouter = Router()
const authController = require('../controllers/auth')

authRouter.post('/singup', authController.singUp)
authRouter.post('/singin', authController.singIn)

module.exports = authRouter
