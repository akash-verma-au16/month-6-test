const uuid = require('uuid');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dunwtiryd',
  api_key: '174155371756272',
  api_secret: 'Z3C78lkQlDML0xR7_w-o5gpQpiM',
  secure: true,
});

exports.upload = (req, res) => {
  if (!req.files || !req.files.photo) {
    return res.status(400).json({
      success: false,
      msg: 'send a file with photo as the name',
    });
  }

  if (req.files.photo.size >= 5000000) {
    return res.status(400).json({
      success: false,
      msg: 'file size should be less than 5 MB',
    });
  }

  if (req.files.photo.mimetype.split('/')[0] !== 'image') {
    return res.status(400).json({
      success: false,
      msg: 'file should only be an image',
    });
  }

  const filePath = `./upload/${uuid.v4()}-${req.files.photo.name}`;

  req.files.photo.mv(filePath, (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        msg: 'something went wrong',
      });
    }
  });

  cloudinary.uploader.upload(filePath, (error, result) => {
    return res.status(200).json({
      success: true,
      error,
      result,
    });
  });
};
