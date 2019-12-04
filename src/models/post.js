'use strict'

const { Schema, model } = require('mongoose')

const Posts = new Schema({
  image: { type: String, required: true },
  titulo: { type: String, required: true },
  contenido: { type: String },
  date_created: { type: String },
  autor: { type: String, required: true }
})

module.exports = model('Posts', Posts)
