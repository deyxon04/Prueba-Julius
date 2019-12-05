'use strict'

const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const Posts = new Schema({
  image: { type: String, required: true },
  titulo: { type: String, required: true },
  contenido: { type: String, required: true },
  date_created: { type: String, required: true },
  autor: { type: String, required: true }
})
Posts.plugin(mongoosePaginate)

module.exports = model('Posts', Posts)
