import React from "react";

const AddBook = ({ toggleModal, modal, postError, handleSubmit }) => {
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
              encType="multipart/form-data"
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
                <label htmlFor="form-genre-two">Genre 2</label>
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
            {postError && <div className="post-error">{postError}</div>}
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
