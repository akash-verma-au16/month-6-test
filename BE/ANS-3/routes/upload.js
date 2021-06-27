const express = require('express');
const { upload } = require('../controllers/upload');

const router = express.Router();

router.route('/').post(upload);

module.exports = router;
