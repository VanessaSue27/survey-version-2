import React from "react";

export const FinalText = ({color, number, day}) => {
  return (
    <>
    <h1>Chosen: {color}, {number}, {day}</h1>
    <button onClick={()=>window.location.reload()}>Restart</button>
    </>
  )
};