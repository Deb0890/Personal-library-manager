import React, { useEffect, useState } from "react";
import { AddBook, BookCard } from "../../components";

const Books = () => {
  const [modal, setModal] = useState(false);
  const [books, setBooks] = useState(null);
  const [postError, setPostError] = useState(null);
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

  //Called 1st
  const handleSubmit = (e) => {
    formatFormData(e);
  };

  //called 2nd
  const formatFormData = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Took the 'object conversion' out as stringifying in json isn't needed with FormData object.
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
    const booksApi = "/api/books";
    const response = await fetch(booksApi, {
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
