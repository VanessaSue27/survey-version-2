import React from 'react';

export const FirstQuestion = ({destination, setDestination, setQuestion}) => {
  const handleClick = () => {
    if(destination) {
      setQuestion('secondQuestion');
    } else {
      alert('Please pick a Destination');
    }
  };

  return (
    <form className="question-one-container" onSubmit={(event) => event.preventDefault()}>
      <div className="question-one-form">
        Pick a Destination:
        <div className="radio-buttons">
          <label for="forest" className="question-one-label radio-button-container">
            <input 
                type="radio"  
                name="forest-option" 
                id="forest" 
                value="Forest" 
                onChange={event => setDestination(event.target.value)} 
                checked={destination === "Forest"} 
              />
              Forest
            <span className="custom-radio"></span>
          </label> 

          <label for="city" className="question-one-label radio-button-container">
            <input 
                type="radio"  
                name="city-option" 
                id="city" 
                value="City" 
                onChange={event => setDestination(event.target.value)} 
                checked={destination === "City"} 
              />
              City
            <span className="custom-radio"></span>
          </label>

          <label for="beach" className="question-one-label radio-button-container">
            <input 
                type="radio"  
                name="beach-option" 
                id="beach" 
                value="Beach" 
                onChange={event => setDestination(event.target.value)} 
                checked={destination === "Beach"} 
              />
              Beach
            <span className="custom-radio"></span>
          </label> 
        </div>
      </div>
      <button className="start-button" type="submit" onClick={handleClick}>Next</button>
    </form>
  )
};