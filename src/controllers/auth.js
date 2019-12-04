'use strict'

const authController = {}
const bcypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('../middleware/jwt')
authController.singUp = async (req, res) => {
  try {
    if (await User.findOne({ email: req.body.email })) {
      return res.status(200).json({
        ok: true,
        message: 'Ya existe un usuario con este correo'
      })
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email.toLowerCase(),
      password: await bcypt.hashSync(req.body.password, 10)
    })
    await user.save()
    return res.status(200).json({
      ok: true,
      message: 'Usuario creado correctamente'
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Hubo un error',
      error: error
    })
  }
}
authController.singIn = async (req, res) => {
  try {
    const userInDb = await User.findOne({ email: req.body.email })
    if (!userInDb) {
      return res.status(500).json({
        error: true,
        message: 'Este usuario no existe'
      })
    }
    if (!bcypt.compareSync(req.body.password, userInDb.password)) {
      return res.status(500).json({
        error: true,
        message: 'Contrasena incorrecta'
      })
    }
    return res.status(200).json({
      ok: true,
      message: 'Login correcto',
      jwt: jwt.createToken({ email: userInDb.email, id: userInDb._id })
    })
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: 'Ocurrió algún error'
    })
  }
}
authController.deleteUser = () => { }
authController.getUser = () => { }

module.exports = authController
