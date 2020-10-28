import React from "react";

export const FinalText = ({destination, number, day, snacks}) => {
  return (
    <section className="welcome-box final-text">
    <p>During this digital dream getaway, you'll be going to an exotic {destination} destination with {number} of your best friends. There'll be a party on the {day}, where you'll share delicious {snacks.join(', ')} with everyone!</p>
    <button className="start-button final-button" onClick={()=>window.location.reload()}>Restart</button>
    </section>
  )
};