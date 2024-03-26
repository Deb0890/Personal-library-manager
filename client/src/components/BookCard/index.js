import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="single-book-card">
      <img src={book.image} alt="" />
      <div className="book-info">
        <h3>{book.booktitle}</h3>
        <p>{book.authorfirstname}</p>
        <p>{book.authorlastname}</p>
      </div>
      <p>space for info</p>
    </div>
  );
};

export default BookCard;
