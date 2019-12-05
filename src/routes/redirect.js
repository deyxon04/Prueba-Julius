'use strict'

const { Router } = require('express')
const redirectRouter = Router()
const redirectController = require('../controllers/redirect')

redirectRouter.route('**')
    .get(redirectController.redirect)

module.exports = postRouter
