import React from "react";

const LoanDetails = ({ formData, handleSubmit }) => {
  const formatDateBorrowed = new Date(formData.dateBorrowed);
  const formatDateReturned = new Date(formData.dateReturned);

  const convertedDateBorrowed = formatDateBorrowed.toLocaleDateString("en-GB");
  const convertedDateReturned = formatDateReturned.toLocaleDateString("en-GB");

  const handleFormSubmit = (e) => {
    e.preventdefault;
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
      <form className="loan-details-content-form" onSubmit={handleFormSubmit}>
        <p>Who: {formData.borrower} </p>
        <p>Date borrowed: {convertedDateBorrowed}</p>
        <p>Expected return: {convertedDateReturned}</p>
        <button type="submit">RETURN</button>
      </form>
    </div>
  );
};

export default LoanDetails;
