import React from 'react';

const colorOptions = ["Red", "Green", "Blue"];

export const ColorPicker = ({color, setColor, setQuestion}) => {
  const handleClick = () => {
    if(color) {
      setQuestion('numberPicker')
    } else {
      alert('Please pick!')
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="color-picker">
        Pick a color:
        {colorOptions.map((item) => (
          <label key={item}>
            <input
              id="color-form"
              type="radio"
              value={item}
              onChange={(event) => setColor(event.target.value)}
              checked={color === item} 
              required />
            {item}
          </label>
        ))}
      </div>
      <button type="submit" onClick={handleClick}>Next</button>
    </form>
  )
};