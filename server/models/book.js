const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },
    authorFirstName: {
      type: String,
      required: true,
    },
    authorLastName: {
      type: String,
      required: true,
    },
    genreOne: {
      type: String,
      required: true,
    },
    genreTwo: {
      type: String,
      required: false,
    },
    borrower: {
      type: String,
    },
    dateBorrowed: {
      type: Date,
    },
    dateReturned: {
      type: Date,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

//the schema defines the structure of the documents saved to a collection.

module.exports = mongoose.model("Book", bookSchema);
