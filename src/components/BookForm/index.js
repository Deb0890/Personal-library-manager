import React, { useEffect, useState } from "react";

const BookForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    booktitle: "",
    authorfirstname: "",
    authorlastname: "",
    image: "",
    isbn: "",
    publicationyear: "",
    genreone: "",
    genretwo: "",
  });
  console.log(formData.booktitle);

  useEffect(() => {
    localStorage.setItem("bookData", JSON.stringify(data));
  }, [data]);

  // const handleSubmit = () => {};
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Add a Book</h3>
        <form action="POST" className="form" id="main-form">
          <div className="form-group">
            <label htmlFor="form-book-title">Book title</label>
            <input
              type="text"
              id="form-book-title"
              onChange={(e) => setFormData({ booktitle: e.target.value })}
              value={data.booktitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-author-fn">Author FIRST NAME</label>
            <input
              type="text"
              id="form-author-fn"
              onChange={(e) => {
                setFormData({ authorfirstname: e.target.value });
              }}
              value={data.authorfirstname}
            />
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
          {/* <div className="form-group">
            <label htmlFor="form-isbn">ISBN</label>
            <input type="text" id="form-isbn" />
          </div>
          <div className="form-group">
            <label htmlFor="form-pub-year">Publication year</label>
            <input type="number" id="form-pub-year" />
          </div> */}
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
          <button form="main-form" type="submit">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
