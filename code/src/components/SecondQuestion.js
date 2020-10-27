import React from "react";

export const SecondQuestion = ({number, setNumber, setQuestion}) => {
  const handleClick = () => {
    if(number) {
      setQuestion('thirdQuestion');
    } else {
      alert('Please pick!');
    }
  };

  return (
    <>
      <div className="number-picker">
        <label key={number}>
          Pick your favorite number (between 1 and 5):
          <input
            type="number"
            name="quantity"
            min="1"
            max="5"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            required />
        </label>
        <button onClick={handleClick}>Next</button>
      </div>
    </>
  );
};