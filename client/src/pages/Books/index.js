import React, { useEffect, useState } from "react";
import { AddBook, BookCard } from "../../components";

const Books = () => {
  const [modal, setModal] = useState(false);
  const [books, setBooks] = useState(null);
  const booksUrl = "/api/books";

  const toggleModal = () => {
    setModal(!modal);
  };

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
      <AddBook toggleModal={toggleModal} modal={modal} />

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
