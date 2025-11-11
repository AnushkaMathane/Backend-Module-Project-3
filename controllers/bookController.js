// Mock books data
let books = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    price: 499,
    inStock: true,
  },
  {
    id: "2",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    price: 299,
    inStock: true,
  },
  {
    id: "3",
    title: "Ikigai",
    author: "Héctor García",
    genre: "Self-Help",
    price: 399,
    inStock: true,
  },
];

// GET all books
const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// GET book by ID
const getBookById = (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.status(200).json(book);
};

// POST create book
const createBook = (req, res) => {
  const { title, author, genre, price, inStock } = req.body;
  if (!title || !author || !genre)
    return res.status(400).json({ message: "All fields are required" });

  const newBook = {
    id: (books.length + 1).toString(),
    title,
    author,
    genre,
    price: price || 0,
    inStock: inStock !== undefined ? inStock : true,
  };

  books.push(newBook);
  res.status(201).json({ message: "Book created successfully", book: newBook });
};

// PUT update book
const updateBook = (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });

  const { title, author, genre, price, inStock } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;
  book.genre = genre || book.genre;
  book.price = price !== undefined ? price : book.price;
  book.inStock = inStock !== undefined ? inStock : book.inStock;

  res.status(200).json({ message: "Book updated successfully", book });
};

// DELETE book
const deleteBook = (req, res) => {
  const index = books.findIndex((b) => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books.splice(index, 1);
  res.status(200).json({ message: "Book deleted successfully" });
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
