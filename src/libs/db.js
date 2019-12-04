const mongoose = require('mongoose')
const keys = require('../../keys')

module.exports = () => {
  return mongoose.connect(keys.URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, retryWrites: false })
}
