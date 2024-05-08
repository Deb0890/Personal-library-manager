import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoanForm, LoanDetails } from "../../components";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const bookUrl = "/api/books/" + id;
  const [showLoanForm, setShowLoanForm] = useState(true);

  useEffect(() => {
    console.log("useEffect");
    const fetchBook = async () => {
      try {
        const response = await fetch(bookUrl);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        } else {
          throw new Error("Failed to fetch book");
        }
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [bookUrl]);

  const handleSubmitLoan = async (formData) => {
    try {
      // Send PATCH request to update book with loan information
      const response = await fetch(bookUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Loan information updated successfully");
        // Fetch the book again after updating loan info to ensure that you have the latest data
        const response = await fetch(bookUrl);
        const updatedBookData = await response.json();

        // Update the book state with the updated data
        setBook(updatedBookData);
        setShowLoanForm(false);
      } else {
        throw new Error("Failed to update loan information");
      }
    } catch (error) {
      console.error("Error updating loan information:", error);
    }
  };

  const handleReturnBook = async (formData) => {
    try {
      // Send PATCH request to update book with loan information
      const response = await fetch(bookUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Loan information updated successfully");
        // fetch the book again after updating loan info to ensure that you have the latest data
        const response = await fetch(bookUrl);
        const updatedBookData = await response.json();

        // Update the book state with the updated data
        setBook(updatedBookData);
      } else {
        throw new Error("Failed to update loan information");
      }
    } catch (error) {
      console.error("Error updating loan information:", error);
    }

    setShowLoanForm(true);
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
              <img src={book.image} alt={book.booktitle} />
            </div>
          </div>
          <hr />
          <div className="book-details-content">
            <div className="book-details-left">
              <p>
                Genre(s): {book.genreone}, {book.genretwo}
              </p>
            </div>
            {showLoanForm ? (
              <LoanForm handleSubmit={handleSubmitLoan} />
            ) : (
              <LoanDetails formData={book} handleSubmit={handleReturnBook} />
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Book;
