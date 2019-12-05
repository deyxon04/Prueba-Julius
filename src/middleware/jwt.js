'use strict'

const jwt = require('jsonwebtoken')
const config = require('../config/config')

module.exports = {
  createToken (payload) {
    return jwt.sign({ user: payload }, config.SECREET_JWT, { expiresIn: '1h' })
  },
  validateToken (req, res, next) {
    jwt.verify(req.headers.authorization, config.SECREET_JWT, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          ok: false,
          error: 'Unauthorized',
          message: 'Permiso denegado no has iniciado sesión'
        })
      }
      req.user = decoded.user
      next()
    })
  }

}
