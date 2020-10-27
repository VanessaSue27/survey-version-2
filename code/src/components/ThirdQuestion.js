import React from "react";

export const ThirdQuestion = ({day, setDay, setQuestion}) => {
  const handleClick = () => {
    if(day) {
      setQuestion('fourthQuestion');
    } else {
      alert('Please pick a Time');
    }
  };

  return (
    <div className="welcome-box question-three-container">
      <label htmlFor="dayTime">Pick a time of the Day:</label>
        <select
          id="dayTime"
          onChange={(event) => setDay(event.target.value)}
          value={day} required>
            <option value="">Select a time of the day:</option>
            <option value="Sunrise">Sunrise</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Sunset">Sunset</option>
        </select>
        <button className="start-button third-button" onClick={handleClick}>Next</button>
    </div>
  );
};