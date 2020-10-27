import React from 'react';

const destinationOptions = ["City", "Forest", "Beach"];

export const FirstQuestion = ({destination, setDestination, setQuestion}) => {
  const handleClick = () => {
    if(destination) {
      setQuestion('secondQuestion');
    } else {
      alert('Please pick!');
    }
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        Pick a Destination:
        {destinationOptions.map((item) => (
          <label key={item} htmlFor="destination-form">
            <input
              id="destination-form"
              type="radio"
              value={item}
              onChange={(event) => setDestination(event.target.value)}
              checked={destination === item} 
              required />
            {item}
          </label>
        ))}
      </div>
      <button type="submit" onClick={handleClick}>Next</button>
    </form>
  )
};