const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
  const comments = await Comment.find().populate('postId');

  res.status(200).json({
    success: true,
    comments,
  });
};

exports.getComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id).populate('postId');

  if (!comment) {
    return res.status(200).json({
      success: true,
      msg: 'comment not found',
    });
  }

  res.status(200).json({
    success: true,
    comment,
  });
};

exports.createComment = async (req, res) => {
  const { text, postId } = req.body;

  if (!text || !postId) {
    return res.status(200).json({
      success: true,
      msg: 'give a text and a postId to create a comment',
    });
  }

  const comment = await Comment.create(req.body);

  res.status(200).json({
    success: true,
    comment,
  });
};

exports.updateComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return res.status(200).json({
      success: true,
      msg: 'comment not found',
    });
  }

  await Comment.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json({
    success: true,
    msg: 'comment was updated',
  });
};

exports.deleteComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    return res.status(200).json({
      success: true,
      msg: 'comment not found',
    });
  }

  comment.remove();

  res.status(200).json({
    success: true,
    msg: 'comment was removed',
  });
};
