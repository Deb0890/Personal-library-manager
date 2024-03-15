const express = require("express");
const {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/book");
const router = express.Router();

//GET all books
router.get("/", getBooks);

//GET one book
router.get("/:id", getBook);

//POST a new book
router.post("/", createBook);

// PATCH a book
router.patch("/:id", updateBook);

// DELETE a book
router.delete("/:id", deleteBook);

module.exports = router;
