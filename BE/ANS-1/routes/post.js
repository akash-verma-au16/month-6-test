const express = require('express');
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost
} = require('../controllers/post');

const router = express.Router();

const { protect } = require('../middleware/auth')

router.use(protect)

router
    .route('/')
    .get(getPosts)
    .post(createPost)

router
    .route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost)

module.exports = router;