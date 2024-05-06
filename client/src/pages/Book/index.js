import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoanForm } from "../../components";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const bookUrl = "/api/books/" + id;

  useEffect(() => {
    console.log("useEffect");
    const fetchBook = async () => {
      const response = await fetch(bookUrl);
      const data = await response.json();
      if (response.ok) {
        setBook(data);
      }
      console.log(data);
    };
    fetchBook();
  }, []);

  const handleSubmitLoan = (e) => {
    e.preventDefault();
  };

  return (
    <div className="book-details-container">
      {book ? (
        <>
          <div className="book-details-head">
            <div className="book-details">
              <h2 className="book-title">{book.booktitle}</h2>
              <h2 className="book-author">
                {book.authorfirstname} {book.authorlastname}
              </h2>
            </div>
            <div className="book-image">
              <img src={book.image}></img>
            </div>
          </div>
          <hr />
          <div className="book-details-content">
            <div className="book-details-left">
              <p>
                Genre(s): {book.genreone}, {book.genretwo}
              </p>
            </div>
            <LoanForm handleSubmit={handleSubmitLoan} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Book;
