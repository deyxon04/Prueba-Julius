'use strict'

const postController = {}
const storateS3 = require('../libs/multer')
const singleFileUpload = storateS3.single('image-julius')
const Posts = require('../models/post')
postController.createPost = async (req, res) => {
  try {
    singleFileUpload(req, res, async (error) => {
      if (error) {
        return res.status(422).json({
          ok: false,
          message: 'Hubo un error',
          error: error.message
        })
      }
      const post = new Posts({
        image: req.file.location,
        titulo: req.body.titulo,
        contenido: req.body.contenido,
        date_created: JSON.stringify(new Date()).substring(0, 11).replace('"', ''),
        autor: req.user.id
      })
      await post.save()
      return res.status(200).json({
        ok: true,
        message: 'Post creado correctamente'
      })
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Hubo un error',
      error: error
    })
  }
}

postController.getPosts = async (req, res) => {
  try {
    const post = await Posts.find({ autor: req.user.id })
    return res.status(200).json({
      ok: true,
      message: 'Estos son tus post',
      error: post
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Hubo un error',
      error: error
    })
  }
}

postController.deletePost = async (req, res) => {
  try {
    if (await Posts.findById(req.body.id)) {
      await Posts.findOneAndRemove({ autor: req.user.id, _id: req.body.id })
      return res.status(200).json({
        ok: true,
        message: 'Post eliminado correctamente'
      })
    } else {
      return res.status(200).json({
        ok: true,
        message: 'Este post no te pertenece'
      })
    }
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Ingresa un id correcto'
    })
  }
}

postController.filterPosts = async (req, res) => {
  try {
    let posts = await Posts.paginate({ titulo: { $regex: req.params.value }, autor: req.user.id })
    if (posts.totalDocs < 1) {
      posts = await Posts.paginate({ contenido: { $regex: req.params.value }, autor: req.user.id })
      if (posts.totalDocs < 1) {
        return res.status(200).json({
          ok: true,
          message: `No hay post asociados a tu busqueda ${req.params.value}`,
          posts: posts.docs
        })
      }
      return res.status(200).json({
        ok: true,
        message: `Estos son post que arrojó la busqueda ${req.params.value}`,
        posts: posts.docs
      })
    }
    return res.status(200).json({
      ok: true,
      message: `Estos son post que arrojó la busqueda ${req.params.value}`,
      posts: posts.docs
    })
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'hubo algún error',
      error: error
    })
  }
}

module.exports = postController
