import React from "react";

export const SecondQuestion = ({ number, setNumber, setQuestion }) => {
  const handleClick = () => {
    if (number) {
      setQuestion("thirdQuestion");
    } else {
      alert("Please pick a Number");
    }
  };

  return (
    <div className="welcome-box question-two-container">
      <label key={number}>
        Pick your favorite number
        <p>Between 5 and 10</p>
        <input
          type="number"
          name="quantity"
          min="5"
          max="10"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          required />
      </label>
      <button className="start-button second-button" onClick={handleClick}>
        Next
      </button>
    </div>
  );
};