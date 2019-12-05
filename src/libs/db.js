const mongoose = require('mongoose')
const config = require('../config/config')

module.exports = () => {
  return mongoose.connect(config.URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, retryWrites: false })
}
