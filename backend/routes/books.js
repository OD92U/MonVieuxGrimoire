const express = require('express');
const auth = require('../middleware/auth');
const { upload, resizeImage } = require('../middleware/multer-config');
const booksCtrl = require('../controllers/books');
const router = express.Router();

router.get('/', booksCtrl.getAllBooks);
router.get('/bestrating', booksCtrl.bestBooks);
router.post('/', auth, upload, resizeImage, booksCtrl.createBook);
router.get('/:id', booksCtrl.getOneBook);
router.put('/:id', auth, upload, resizeImage, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.post('/:id/rating', auth, booksCtrl.userRateBooks);


module.exports = router;