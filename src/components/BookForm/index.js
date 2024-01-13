import React, { useState } from "react";

const BookForm = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add a Book</h3>
        <form className="form" id="main-form">
          <div className="form-group">
            <label htmlFor="form-title">Book title</label>
            <input type="text" id="form-title" />
          </div>
          <div className="form-group">
            <label htmlFor="form-author-fn">Author FIRST NAME</label>
            <input type="text" id="form-author-fn" />
          </div>
          <div className="form-group">
            <label htmlFor="form-author-ln">Author LAST NAME</label>
            <input type="text" id="form-author-ln" />
          </div>
          <div className="form-group">
            <label htmlFor="form-upload-img"></label>
            <input
              type="file"
              id="form-upload-img"
              placeholder="Upload an image of your copy:"
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-isbn">ISBN</label>
            <input type="text" id="form-isbn" />
          </div>
          <div className="form-group">
            <label htmlFor="form-pub-year">Publication year</label>
            <input type="number" id="form-pub-year" />
          </div>
          <div className="form-group">
            <label htmlFor="form-genre-one">Genre 1</label>
            <select type="select" id="form-genre-one">
              <option value="chooseAGenre">Choose a genre</option>
              <option value="genreOne">genre one</option>
              <option value="genreTwo">genre two</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="form-genre-one">Genre 2</label>
            <select type="select" id="form-genre-two">
              <option value="chooseASecondaryGenre">
                Choose a secondary genre (Optional)
              </option>
              <option value="genreOne">genre one</option>
              <option value="genreTwo">genre two</option>
            </select>
          </div>
        </form>
        <div className="main-form-buttons">
          <button form="main-form" onClick={closeModal}>
            Close
          </button>
          <input form="main-form" type="submit"></input>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
