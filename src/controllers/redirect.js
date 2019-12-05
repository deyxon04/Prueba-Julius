'use strict'

const redirectController = {}
redirectController.redirect = async (req, res) => {
  res.redirect('/api')
}

module.exports = redirectController
