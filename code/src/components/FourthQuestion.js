import React from "react";

export const FourthQuestion = ({ snacks, setSnacks, setQuestion }) => {
  const availableSnacks = [
    "Sandwiches",
    "Potato Chips",
    "Sodas",
    "Beer",
    "Grapes",
    "Cookies",
  ];

  const handleClick = () => {
    if (snacks.length > 0) {
      setQuestion("summary");
    } else {
      alert("Please grab some Snacks!");
    }
  };

  //This function makes sure we can add several checkboxes values, when
  //user picks a first value, the coming ones they choose will be added
  //to that first one inside an array and set that array as the snacks chosen
  const onTypeChange = (item) => {
    snacks.includes(item)
      ? setSnacks(snacks.filter((index) => index !== item))
      : setSnacks([...snacks, item]);
  };

  return (
    <form
      className="welcome-box question-four-container"
      onSubmit={(event) => event.preventDefault()}
    >
      <p className="snacks-text">Which snacks are you taking with you?</p>
      <div className="checkboxes-container">
        {availableSnacks.map((item) => (
          <label className="checkbox-container" key={item}>
            <input
              id="snack-options"
              name="snack"
              type="checkbox"
              checked={snacks.includes(item)}
              onChange={() => onTypeChange(item)} />
            {item}
            <span className="custom-checkbox"></span>
          </label>
        ))}
      </div>
      <button className="start-button fourth-button" onClick={handleClick}>
        Pack your bags!
      </button>
    </form>
  );
};