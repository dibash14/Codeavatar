const Book = require('../models/bookModel'); // Make sure this path is correct

// GET /books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// POST /books
exports.createBook = async (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }

  const newBook = new Book({ title, author });
  await newBook.save();
  res.status(201).json(newBook);
};

// PUT /books/:id
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

// DELETE /books/:id
exports.deleteBook = async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);

  if (!deletedBook) {
    return res.status(404).json({ error: 'Book not found.' });
  }

  res.json(deletedBook);
};

