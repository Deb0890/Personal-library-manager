import React, { useState } from "react";

const AddBook = () => {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState({});
  //formData isn't being used currently but may be useful when posting to actual server
  //consider moving toggleModal to parent component, Books page.
  const toggleModal = () => {
    setModal(!modal);
    setErrors({});
  };

  const formatFormData = (e) => {
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form); //form elements in an array now set in an object. This may not be needed to post to a server but makes it easier to see what is happening in the console
    formValidationErrors(data);
    setFormData(data);

    console.log(data);
  };
  //line 16 is like instead of doing the following, for example:
  // const body = {};
  //   for (const [key, value] of form.entries()) {
  //     body[key] = value;
  //   }

  const formValidationErrors = (data) => {
    const newErrors = {};
    if (!data.booktitle) {
      newErrors.booktitle = "Book title is required";
    }
    if (!data.authorfirstname) {
      newErrors.authorfirstname = "Author first name is required";
    }
    if (!data.authorlastname) {
      newErrors.authorlastname = "Author last name is required";
    }

    setErrors(newErrors);
    // If no errors, close modal
    const isEmpty = Object.keys(newErrors).length === 0;
    if (isEmpty) {
      toggleModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formatFormData(e);
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
              id="mainform"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="form-book-title">Book title</label>
                <input
                  type="text"
                  id="form-book-title"
                  name="booktitle"
                  // onChange={(e) => {
                  //   setFormData({ ...formData, booktitle: e.target.value });
                  // }}
                  // value={formData.booktitle}
                />
                {errors.booktitle && (
                  <p className="validation-error-msg">{errors.booktitle}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="form-author-fn">Author FIRST NAME</label>
                <input
                  type="text"
                  id="form-author-fn"
                  name="authorfirstname"
                  // onChange={(e) => {
                  //   setFormData({
                  //     ...formData,
                  //     authorfirstname: e.target.value,
                  //   });
                  // }}
                  // value={formData.authorfirstname}
                />
                {errors.authorfirstname && (
                  <p className="validation-error-msg">
                    {errors.authorfirstname}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="form-author-ln">Author LAST NAME</label>
                <input
                  type="text"
                  id="form-author-ln"
                  name="authorlastname"
                  // onChange={(e) => {
                  //   setFormData({
                  //     ...formData,
                  //     authorlastname: e.target.value,
                  //   });
                  // }}
                  // value={formData.authorlastname}
                />
                {errors.authorlastname && (
                  <p className="validation-error-msg">
                    {errors.authorlastname}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="form-upload-img"></label>
                <input
                  type="file"
                  id="form-upload-img"
                  name="image"
                  placeholder="Upload an image of your copy:"
                  // onChange={(e) => {
                  //   setFormData({ ...formData, image: e.target.value });
                  // }}
                  // value={formData.image}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-genre-one">Genre 1</label>
                <select
                  type="select"
                  id="form-genre-one"
                  name="genreone"
                  // onChange={(e) => {
                  //   setFormData({ ...formData, genreone: e.target.value });
                  // }}
                  // value={formData.genreone}
                >
                  <option value="chooseAGenre">Choose a genre</option>
                  <option value="romance">romance</option>
                  <option value="classic">classic</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="form-genre-one">Genre 2</label>
                <select
                  type="select"
                  id="form-genre-two"
                  name="genretwo"
                  // onChange={(e) => {
                  //   setFormData({ ...formData, genretwo: e.target.value });
                  // }}
                  // value={formData.genretwo}
                >
                  <option value="chooseASecondaryGenre">
                    Choose a secondary genre (Optional)
                  </option>
                  <option value="romance">romance</option>
                  <option value="classic">classic</option>
                </select>
              </div>
            </form>
            <button form="mainform" onClick={toggleModal}>
              Cancel
            </button>
            <button form="mainform" type="submit">
              Save
            </button>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default AddBook;
