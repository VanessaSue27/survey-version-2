import React from "react";

export const FourthQuestion = ({snacks, setSnacks, setQuestion}) => {
  const availableSnacks = ['Kombucha', 'Potato Chips', 'Sodas', 'Beer', 'Grapes', 'Cookies'];
  const handleClick = () => {
    if(snacks.length > 0) {
      setQuestion('summary');
    } else {
      alert('Please grab some Snacks!');
    }
  };

  const onTypeChange = item => {
    snacks.includes(item)
    ? setSnacks( snacks.filter(index => index !== item) ) 
    : setSnacks( [...snacks, item] );
  };

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <p>Which snacks are you taking with you?</p>
        <div>
            {availableSnacks.map((item) => (
            <label key={item} htmlFor="snack-options"> 
                <input
                    id="snack-options"
                    name="snack"
                    type="checkbox" 
                    checked={snacks.includes(item)} 
                    onChange={() => onTypeChange(item)}
                />              
                {item}
                <span className="custom-checkbox"></span>                         
            </label>
            ))}
        </div>
        <button onClick={handleClick}>Show me the result!</button>
      </form> 
    </>
  );
};