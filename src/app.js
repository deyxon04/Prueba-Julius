'use strict'
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const jwt = require('./middleware/jwt')
const app = express()

// Midledwares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))

// Rutas
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

app.use('/api', authRouter)
app.use('/api', postRouter)
app.use('/api', jwt.validateToken)

module.exports = app
