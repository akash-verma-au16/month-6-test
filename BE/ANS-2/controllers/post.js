const Post = require('../models/Post');

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('comments');

  res.status(200).json({
    success: true,
    posts,
  });
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('comments');

  if (!post) {
    return res.status(200).json({
      success: true,
      msg: 'post not found',
    });
  }

  res.status(200).json({
    success: true,
    post,
  });
};

exports.createPost = async (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(200).json({
      success: true,
      msg: 'give a title and body to create a post',
    });
  }

  const post = await Post.create(req.body);

  res.status(200).json({
    success: true,
    post,
  });
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(200).json({
      success: true,
      msg: 'post not found',
    });
  }

  await Post.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    msg: 'post was updated',
  });
};

exports.deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return res.status(200).json({
      success: true,
      msg: 'post not found',
    });
  }

  post.remove();

  res.status(200).json({
    success: true,
    msg: 'post was removed',
  });
};
