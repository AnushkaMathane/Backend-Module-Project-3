const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// GET all books
router.get("/", getAllBooks);

// GET book by ID
router.get("/:id", getBookById);

// POST create book
router.post("/", createBook);

// PUT update book
router.put("/:id", updateBook);

// DELETE remove book
router.delete("/:id", deleteBook);

module.exports = router;
