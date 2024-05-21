import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { LoanForm, LoanDetails } from "../../components";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [showLoanForm, setShowLoanForm] = useState(true);
  const navigate = useNavigate();
  const bookUrl = "/api/books/" + id;

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

  const deleteBook = async () => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this book?"
      );

      if (confirmed) {
        const response = await fetch(bookUrl, {
          method: "DELETE",
        });

        if (response.ok) {
          navigate("/books");
        } else {
          throw new Error("Failed to delete book");
        }
      } else {
        console.log("deletion cancelled");
      }
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <div className="book-details-container">
      {book ? (
        <>
          <div className="book-details-head">
            <div className="book-details">
              <h2 className="book-title">{book.bookTitle}</h2>
              <h2 className="book-author">
                {book.authorfirstname} {book.authorLastName}
              </h2>
            </div>
            <div className="book-image">
              <img
                src={`http:localhost:3000/${book.image}`}
                alt={book.bookTitle}
              />
            </div>
            <button id="delete-button" onClick={deleteBook}>
              delete
            </button>
          </div>
          <hr />
          <div className="book-details-content">
            <div className="book-details-left">
              <p>
                Genre(s): {book.genreOne}, {book.genreTwo}
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
