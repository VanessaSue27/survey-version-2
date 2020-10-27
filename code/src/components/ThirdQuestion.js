import React from "react";

export const ThirdQuestion = ({day, setDay, setQuestion}) => {
  const handleClick = () => {
    if(day) {
      setQuestion('fourthQuestion');
    } else {
      alert('Please pick!');
    }
  };

  return (
    <div>
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
        <button onClick={handleClick}>Show me the result!</button>
    </div>
  );
};