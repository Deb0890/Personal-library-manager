//The controller houses the logic that handles requests and responses. Each file should focus on a specific resource or functionality.
const multer = require("multer");
const Book = require("../models/book");
const mongoose = require("mongoose");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// GET ALL BOOKS
const getBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
  // console.log(books);
};
//-1 means that the books will be sorted in descending order (newest entries at the top)

// GET A SINGLE BOOK
const getBook = async (req, res) => {
  const { id } = req.params;

  //check if incoming id is valid. If not throw error.
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such book in your library!" });
  }

  //if valid, look for id in db.
  const book = await Book.findById(id);
  // Note that when this variable was used before the first if statement, there was a different error because the 'findById' method returns a promise and if not caught in a try catch block for example, it bubbles up and so resulted in an unhandled promise rejection which crashed the entire server, as I haven't yet set up an Express error handler middleware.
  //THUS if a book id is NOT valid, it is caught by the first statement.
  //if is IS valid, it goes through findById like normal.
  //If it's valid but not present, it gets to the last check.
  //It may be worth wrapping in a try catch block anyway? or perhaps handle this closer to the entry of the server, by setting up that error handling middleware.

  //if valid but not found, throw error.
  if (!book) {
    return res.status(404).json({ error: "No such book in your library!" });
  }

  //if found respond as json
  res.status(200).json(book);
};
// return statement is used here to end the execution of the function after sending the error response
// The getBooks function for example doesn't need to explicitly use return because it's not relying on the return value to continue execution.

// CREATE A NEW BOOK
const createBook = async (req, res) => {
  try {
    let imagePath = null;
    // Check if req.file exists and handle the case where it's undefined
    if (req.file) {
      imagePath = "uploads/" + req.file.filename;
    }
    const { booktitle, authorfirstname, authorlastname, genreone, genretwo } =
      req.body;

    // add document to the database
    const book = await Book.create({
      booktitle,
      authorfirstname,
      authorlastname,
      genreone,
      genretwo,
      image: imagePath,
      borrower: "",
      dateBorrowed: "",
      dateReturned: "",
    });
    res.status(201).json({
      message: "Book created successfully.",
      book: {
        ...book.toObject(),
        borrower: book.borrower,
        dateBorrowed: book.dateBorrowed,
        dateReturned: book.dateReturned,
      },
    });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(400).json({ error: error.message });
    // res.status(500).json({ error: "Internal server error." });
  }
  console.log(req.body);
  console.log(req.file);
};

// UPDATE A BOOK
const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such book in your library!" });
  }

  try {
    // Extract specific fields to update from req.body
    const { borrower, dateBorrowed, dateReturned } = req.body;

    // Create update object with specified fields
    const update = {};
    if (borrower) update.borrower = borrower;
    if (dateBorrowed) update.dateBorrowed = dateBorrowed;
    if (dateReturned) update.dateReturned = dateReturned;

    // Update the book using findOneAndUpdate
    const book = await Book.findOneAndUpdate({ _id: id }, update, {
      new: true,
    });

    if (!book) {
      return res.status(404).json({ error: "No such book in your library!" });
    }

    res.status(200).json(book);
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE A BOOK
const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such book in your library!" });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  if (!book) {
    return res.status(404).json({ error: "No such book in your library!" });
  }

  res.status(200).json(book);
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  upload: upload,
};
