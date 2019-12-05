'use strict'

const { Router } = require('express')
const postRouter = Router()
const postController = require('../controllers/post')
const jwt = require('../middleware/jwt')

postRouter.route('/post')
  .post(jwt.validateToken, postController.createPost)
  .get(jwt.validateToken, postController.getPosts)
  .delete(jwt.validateToken, postController.deletePost)

postRouter.post('/postfilter/', jwt.validateToken, postController.filterPosts)

module.exports = postRouter
