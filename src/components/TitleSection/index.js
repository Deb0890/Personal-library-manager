import React, { useState, useEffect } from "react";

const TitleSection = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    booktitle: "",
    authorfirstname: "",
    authorlastname: "",
    image: "",
    genreone: "",
    genretwo: "",
  });

  const toggleModal = () => {
    setModal(!modal);
    setFormData({
      booktitle: "",
      authorfirstname: "",
      authorlastname: "",
      image: "",
      genreone: "",
      genretwo: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleModal();
    console.log(formData);
  };

  return (
    <div id="title-section">
      <h2 className="title">The Library</h2>
      <button id="add-a-book" onClick={toggleModal}>
        Add a Book
      </button>
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add a Book</h3>
            <form
              action="POST"
              className="form"
              id="main-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="form-book-title">Book title</label>
                <input
                  type="text"
                  id="form-book-title"
                  onChange={(e) => {
                    setFormData({ ...formData, booktitle: e.target.value });
                  }}
                  value={formData.booktitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-author-fn">Author FIRST NAME</label>
                <input
                  type="text"
                  id="form-author-fn"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      authorfirstname: e.target.value,
                    });
                  }}
                  value={formData.authorfirstname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-author-ln">Author LAST NAME</label>
                <input
                  type="text"
                  id="form-author-ln"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      authorlastname: e.target.value,
                    });
                  }}
                  value={formData.authorlastname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-upload-img"></label>
                <input
                  type="file"
                  id="form-upload-img"
                  placeholder="Upload an image of your copy:"
                  onChange={(e) => {
                    setFormData({ ...formData, image: e.target.value });
                  }}
                  value={formData.image}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-genre-one">Genre 1</label>
                <select
                  type="select"
                  id="form-genre-one"
                  onChange={(e) => {
                    setFormData({ ...formData, genreone: e.target.value });
                  }}
                  value={formData.genreone}
                >
                  <option value="chooseAGenre">Choose a genre</option>
                  <option value="genreOne">genre one</option>
                  <option value="genreTwo">genre two</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="form-genre-one">Genre 2</label>
                <select
                  type="select"
                  id="form-genre-two"
                  onChange={(e) => {
                    setFormData({ ...formData, genretwo: e.target.value });
                  }}
                  value={formData.genretwo}
                >
                  <option value="chooseASecondaryGenre">
                    Choose a secondary genre (Optional)
                  </option>
                  <option value="genreOne">genre one</option>
                  <option value="genreTwo">genre two</option>
                </select>
              </div>
            </form>
            <button form="main-form" onClick={toggleModal}>
              Cancel
            </button>
            <button form="main-form" type="submit">
              Save
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default TitleSection;
