import React, { useState } from "react";
import { AddBook } from "../../components";

const Books = () => {
  const [booksPresent, setBooksPresent] = useState(false);
  const message =
    "You currently have no books in your library. Add a book to get started.";
  return (
    <>
      <AddBook />
      {booksPresent ? (
        <a href="">
          <div className="book-card">book details</div>
        </a>
      ) : (
        <div className="no-books-yet">{message}</div>
      )}
    </>
  );
};

export default Books;
//The message should only show when there is no book data present to retrieve
//If there are books present they are retrieved and displayed
//If no books, display message. Otherwise don't display message, display book.
//Does the message need to be in state? Probably not but should be in some kind of variable...

//On initial render, API is called to check for books.
//books? displayBooks : message;
