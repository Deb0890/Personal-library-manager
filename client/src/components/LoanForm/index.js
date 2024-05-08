import React, { useState } from "react";

const LoanForm = ({ handleSubmit }) => {
  const [borrower, setBorrower] = useState("");
  const [dateBorrowed, setDateBorrowed] = useState("");
  const [dateReturned, setDateReturned] = useState("");
  const [loanFormError, setLoanFormError] = useState("");

  const handleBorrowerChange = (e) => {
    setBorrower(e.target.value);
  };

  const handleBorrowedDateChange = (e) => {
    setDateBorrowed(e.target.value);
  };

  const handleReturnDateChange = (e) => {
    setDateReturned(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!borrower || !dateBorrowed || !dateReturned) {
      // If any field is empty, display an error message
      setLoanFormError("Please complete all fields");
      console.error("Please fill in all fields");
      return; // Prevent further execution of form submission
    }
    const borrowedDateObj = new Date(dateBorrowed);
    const returnDateObj = new Date(dateReturned);

    // Construct formData object with Date objects
    const formData = {
      borrower,
      dateBorrowed: borrowedDateObj,
      dateReturned: returnDateObj,
    };
    handleSubmit(formData); // Pass formData to parent handleSubmit function
    console.log(formData);
  };

  return (
    <div className="loan-form-content">
      <p>Loan book</p>
      <form className="form" onSubmit={handleFormSubmit} id="loan-form">
        <label htmlFor="borrower">Who:</label>
        <input
          type="text"
          id="borrower"
          value={borrower}
          onChange={handleBorrowerChange}
        />
        <label htmlFor="borrowed-date">Date borrowed:</label>
        <input
          type="date"
          id="borrowed-date"
          value={dateBorrowed}
          onChange={handleBorrowedDateChange}
        />
        <label htmlFor="return-date">Expected return:</label>
        <input
          type="date"
          id="return-date"
          value={dateReturned}
          onChange={handleReturnDateChange}
        />
        <button type="submit">LOAN</button>
        <p>{loanFormError}</p>
      </form>
    </div>
  );
};

export default LoanForm;
