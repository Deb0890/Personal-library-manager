import React from "react";

const LoanForm = ({ handleSubmit }) => {
  return (
    <div className="loan-form-content">
      <p>Loan book</p>
      <form
        action="PATCH"
        className="form"
        id="loan-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="loan-form">Who:</label>
        <input type="text" name="" id="borrower" />
        <label htmlFor="loan-form">Date borrowed:</label>
        <input type="date" name="" id="borrowed-date" />
        <label htmlFor="loan-form">Expected Return:</label>
        <input type="date" name="" id="return-date" />
        <button form="loan-form" type="submit">
          LOAN
        </button>
      </form>
    </div>
  );
};

export default LoanForm;
