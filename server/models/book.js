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
      default: "",
    },
    dateBorrowed: {
      type: Date,
      default: "",
    },
    dateReturned: {
      type: Date,
      default: "",
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

bookSchema.statics.createUpdateLoanObject = function (body) {
  const { borrower, dateBorrowed, dateReturned } = body;
  const update = {};
  if (borrower) update.borrower = borrower;
  if (dateBorrowed) update.dateBorrowed = dateBorrowed;
  if (dateReturned) update.dateReturned = dateReturned;
  return update;
};

//the schema defines the structure of the documents saved to a collection.

module.exports = mongoose.model("Book", bookSchema);
