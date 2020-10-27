import React from "react";

export const FinalText = ({destination, number, day, snacks}) => {
  return (
    <>
    <h1>Chosen: {destination}, {number}, {day}, {snacks.join(', ')}</h1>
    <button onClick={()=>window.location.reload()}>Restart</button>
    </>
  )
};