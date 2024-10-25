const multer = require('multer');
const sharp = require('sharp');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};


const storage = multer.memoryStorage(); 
const upload = multer({ storage: storage }).single('image');
const resizeImage = async (req, res, next) => {
  try {
    const extension = MIME_TYPES[req.file.mimetype];
    const filename = req.file.originalname.split(' ').join('_') + Date.now() + '.' + extension;
    await sharp(req.file.buffer)
      .resize(600, 900) 
      .toFormat(extension)
      .toFile("./images/" + filename);

    req.file.filename = filename;
    next();
  } catch (error) {
    next(error); 
  }
};

module.exports = { upload, resizeImage };