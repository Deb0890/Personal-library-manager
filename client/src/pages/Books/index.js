import React, { useEffect, useState } from "react";
import { AddBook } from "../../components";
import { Link } from "react-router-dom";
const Books = () => {
  const [modal, setModal] = useState(false);
  const [books, setBooks] = useState([]);
  // const [image, setImage] = useState([]);
  const [postError, setPostError] = useState(null);
  const booksUrl = "/api/books";

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(booksUrl);
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        setBooks(json);
      }
    };

    fetchBooks();
  }, []);
  //can't seem to add function as a dependency in useEffect so page rerenders on successful POST, why? Ans. Used to handle side effects.

  //Called 1st
  const handleSubmit = (e) => {
    formatFormData(e);
  };

  //called 2nd
  const formatFormData = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await postData(formData);
      // Handle response as needed
      console.log(response);
    } catch (error) {
      console.error("Error:", error);
      // Handle error as needed
    }
  };

  //called 3rd
  const postData = async (formData) => {
    const response = await fetch(booksUrl, {
      method: "POST",
      body: formData,
    });

    const responseData = await response.json();
    if (!response.ok) {
      console.log(responseData.error);
      setPostError(responseData.error);
      throw new Error(responseData.error || "Failed to add book");
    }
    if (response.ok) {
      toggleModal();
      setPostError(null);
      //immediately appends newly posted book to list. See note under useEffect
      setBooks([responseData.book, ...books]);
      console.log("new book added");
    }

    return responseData;
  };

  return (
    <>
      <AddBook
        toggleModal={toggleModal}
        modal={modal}
        postError={postError}
        handleSubmit={handleSubmit}
      />

      <div className="books-list">
        {books.length > 0 ? (
          books.map((book) => (
            <Link
              to={`/books/${book._id}`}
              key={book._id}
              book={book}
              className="card-link"
            >
              <div className="single-book-card">
                <img
                  src={`http://localhost:3000/${book.image}`}
                  alt={`thumbnail for ${book.bookTitle}`}
                />{" "}
                {/* Note that this is not ideal, tried to experiment with adding the url base into .env and calling from there but it didn't work so far */}
                <div className="book-info">
                  <h3>{book.bookTitle}</h3>
                  <p>{book.authorFirstName}</p>
                  <p>{book.authorlastName}</p>
                </div>
                <p>space for info</p>
              </div>
            </Link>
          ))
        ) : (
          <p>There are no books in your library!</p>
        )}
      </div>
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
