const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Please provide an email and password' });
  }

  const user = await User.findOne({ email }).select('+password');

  if (!user && password != user.password) {
    return res.status(401).json({ error: 'Invalid Credentials' });
  }

  const token = user.getSignedJwtToken();

  res.status(200).json({
    success: true,
    loggedIn: true,
    token,
  });
};

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: 'Please provide an email and password' });
  }

  const exists = await User.findOne({ email });

  if (exists) {
    return res.status(400).json({ error: 'email already taken' });
  }

  const user = await User.create(req.body);

  const token = user.getSignedJwtToken();
  res.status(200).json({
    success: true,
    registered: true,
    token,
  });
};

exports.refresh = (req, res) => {
  const accessToken = jwt.sign(
    { secret: process.env.ACCESS_TOKEN_SECRET },
    process.env.JWT_SECRET
  );

  res.status(200).json({
    success: true,
    accessToken,
  });
};
