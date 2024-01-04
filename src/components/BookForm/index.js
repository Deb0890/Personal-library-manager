import React, { useState } from "react";

const BookForm = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add a Book</h3>
        <button onClick={closeModal}>Close</button>
        <form className="form">
          <label htmlFor="form-title">Book title</label>
          <input type="text" id="form-title" />
          <label htmlFor="form-author-fn">Author FIRST NAME</label>
          <input type="text" id="form-author-fn" />
          <label htmlFor="form-author-ln">Author LAST NAME</label>
          <input type="text" id="form-author-ln" />
          <label htmlFor="form-upload-img"></label>
          <input
            type="file"
            id="form-upload-img"
            placeholder="Upload an image of your copy:"
          />
          <label htmlFor="form-isbn">ISBN</label>
          <input type="text" id="form-isbn" />
          <label htmlFor="form-pub-year">Publication year</label>
          <input type="number" id="form-pub-year" />
          <label htmlFor="form-genre-one"></label>
          <select type="select" id="form-genre-one">
            <option value="chooseAGenre">Choose a genre</option>
            <option value="genreOne">genre one</option>
            <option value="genreTwo">genre two</option>
          </select>
          <select type="select" id="form-genre-two">
            <option value="chooseASecondaryGenre">
              Choose a secondary genre (Optional)
            </option>
            <option value="genreOne">genre one</option>
            <option value="genreTwo">genre two</option>
          </select>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
