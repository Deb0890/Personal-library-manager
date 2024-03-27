import React, { useEffect, useState } from "react";
import { AddBook, BookCard } from "../../components";

const Books = () => {
  const [books, setBooks] = useState(null);
  // Note that useState default shouldn't be a boolean but rather based on what's available in the db.
  // I've just used a boolean for now to toggle between the two options that can be returned
  // and to show the card css I have currently.
  // const message = "You currently have no books in your library. Add a book to get started.";
  const booksUrl = "/api/books";

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(booksUrl);
      const json = await response.json();
      if (response.ok) {
        setBooks(json);
      }
    };

    fetchBooks();
  }, []);

  return (
    <>
      <AddBook />

      <div className="books-list">
        {books && books.map((book) => <BookCard key={book._id} book={book} />)}
      </div>
    </>
  );
};

export default Books;
{
  /* <a href="">
<div className="book-card">book details</div>
</a> */
}
//The message should only show when there is no book data present to retrieve
//If there are books present they are retrieved and displayed
//If no books, display message. Otherwise don't display message, display book.
//Does the message need to be in state? Probably not but should be in some kind of variable...

//On initial render, API is called to check for books.
//books? displayBooks : message;
