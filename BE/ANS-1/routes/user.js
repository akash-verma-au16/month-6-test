const express = require('express');
const {
  login,
  refresh,
  register
} = require('../controllers/user');

const router = express.Router();

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/refresh').post(refresh)

module.exports = router;