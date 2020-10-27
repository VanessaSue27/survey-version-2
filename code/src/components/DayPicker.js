import React from "react";

export const DayPicker = ({day, setDay, setQuestion}) => {
  return (
    <div className="day-picker">
      <label htmlFor="weekdays">Pick a day of the week:</label>
        <select
          id="weekdays"
          onChange={(event) => setDay(event.target.value)}
          value={day} required>
            <option value="">Select a day:</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
        </select>
        <button onClick={() => setQuestion('summary')}>Show me the result!</button>
    </div>
  );
};