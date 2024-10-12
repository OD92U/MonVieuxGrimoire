const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const booksCtrl = require('../controllers/books');
const router = express.Router();

router.get('/', booksCtrl.getAllBooks);
router.get('/bestrating', booksCtrl.bestBooks);
router.post('/', auth, multer, booksCtrl.createBook);
router.get('/:id', booksCtrl.getOneBook);
router.put('/:id', auth, multer, booksCtrl.modifyBook);
router.delete('/:id', auth, booksCtrl.deleteBook);
router.post('/:id/rating', auth, booksCtrl.userRateBooks);


module.exports = router;