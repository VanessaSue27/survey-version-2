import React from "react";

export const FinalText = ({ destination, number, day, snacks }) => {
  return (
    <section className="welcome-box final-text">
      <p>
        On this digital dream getaway, you'll be going to an exotic{" "}
        {destination} destination with {number} of your best friends. There'll
        be a party during the {day}, where you'll share delicious{" "}
        {snacks.join(", ")} with everyone!
      </p>
      <button
        className="start-button final-button"
        onClick={() => window.location.reload()}
      >
        Restart
      </button>
    </section>
  );
};

//On line 10, we do a snacks.join since snacks is an array of all the checkboxes
//the user picked, so they need to be joined to make a string.