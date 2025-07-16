const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const bookController = require('../controllers/bookController');

// Protect all /books routes
router.use(verifyToken);

// Routes (now protected)
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;

