// controllers/bookController.js
const Book = require('../models/bookModel');

// GET all books
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// POST new book
exports.addBook = async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }
  const newBook = new Book({ title, author });
  await newBook.save();
  res.status(201).json(newBook);
};

// PUT update book
exports.updateBook = async (req, res) => {
  const { title, author } = req.body;
  const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    { title, author },
    { new: true }
  );
  if (!updatedBook) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  res.json(updatedBook);
};

// DELETE book
exports.deleteBook = async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);
  if (!deletedBook) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  res.json(deletedBook);
};
