const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    booktitle: {
      type: String,
      required: true,
    },
    authorfirstname: {
      type: String,
      required: true,
    },
    authorlastname: {
      type: String,
      required: true,
    },
    genreone: {
      type: String,
      required: true,
    },
    genretwo: {
      type: String,
      required: false,
    },
    borrower: {
      type: String,
    },
    dateBorrowed: {
      type: Date,
      required: true,
    },
    dateReturned: {
      type: Date,
      required: true,
    },
    image: {
      type: Buffer,
      required: false,
    },
  },
  { timestamps: true }
);

//the schema defines the structure of the documents saved to a collection.

module.exports = mongoose.model("Book", bookSchema);
