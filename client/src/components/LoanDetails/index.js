import React from "react";

const LoanDetails = ({ formData, handleSubmit }) => {
  const formatDateBorrowed = new Date(formData.dateBorrowed);
  const formatDateReturned = new Date(formData.dateReturned);

  const convertedDateBorrowed = formatDateBorrowed.toLocaleDateString("en-GB");
  const convertedDateReturned = formatDateReturned.toLocaleDateString("en-GB");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      borrower: "",
      dateBorrowed: null,
      dateReturned: null,
    };

    handleSubmit(formData);
  };
  return (
    <div className="loan-details-content">
      <p>Loan Details</p>
      <div id="loan-details-content-box">
        <p>Who: {formData.borrower} </p>
        <p>Date borrowed: {convertedDateBorrowed}</p>
        <p>Expected return: {convertedDateReturned}</p>
        <button onClick={handleFormSubmit}>RETURN</button>
      </div>
    </div>
  );
};

export default LoanDetails;
