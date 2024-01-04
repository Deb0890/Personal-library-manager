import React, { useState } from "react";
import BookForm from "../BookForm";

const TitleSection = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div id="title-section">
      <h2 className="title">The Library</h2>
      <button id="add-a-book" onClick={toggleModal}>
        Add a Book
      </button>
      {modal && <BookForm closeModal={toggleModal} />}
      <hr />
    </div>
  );
};

export default TitleSection;
