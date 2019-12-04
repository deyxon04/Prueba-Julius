'use strict'

const jwt = require('jsonwebtoken')
const keys = require('../../keys')

module.exports = {
  createToken (payload) {
    return jwt.sign({ user: payload }, keys.SECREET_JWT, { expiresIn: '1h' })
  },
  validateToken (req, res, next) {
    jwt.verify(req.headers.authorization, keys.SECREET_JWT, (error, decoded) => {
      if (error) {
        return res.status(401).json({
          error: false,
          messge: 'Permiso denegado no has iniciado sesión'
        })
      }
      req.user = decoded.user
      next()
    })
  }

}
