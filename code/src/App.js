import React, { useState } from "react";

import { LandingPage } from "components/LandingPage";
import { ColorPicker } from "components/ColorPicker";
import { NumberPicker } from "components/NumberPicker";
import { DayPicker } from "components/DayPicker";
import { FinalText } from "components/FinalText";

export const App = () => {
  const [question, setQuestion] = useState('landingPage');
  const [color, setColor] = useState();
  const [number, setNumber] = useState();
  const [day, setDay] = useState();

  return (
    <>
      {question !== 'summary' ? (
        <section id="questions-container">
            {question === 'landingPage' && (
                <LandingPage setQuestion={setQuestion}/>
            )}
            {question === 'colorPicker' && (
                <ColorPicker color={color} setColor={setColor} setQuestion={setQuestion}/>   
            )}
            {question === 'numberPicker' && (
                <NumberPicker number={number} setNumber={setNumber} setQuestion={setQuestion}/>   
            )}
            {question === 'dayPicker' && (
                <DayPicker day={day} setDay={setDay} setQuestion={setQuestion}/>   
            )}
        </section>            
        ) : (           
          <FinalText color={color} number={number} day={day} />
      )}     
    </>
  );
};