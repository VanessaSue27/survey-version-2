import React, { useState } from "react";

import { LandingPage } from "components/LandingPage";
import { FirstQuestion } from "components/FirstQuestion"; //Pick favorite destination
import { SecondQuestion } from "components/SecondQuestion"; //Pick a number
import { ThirdQuestion } from "components/ThirdQuestion"; //Pick time of the Day
import { FourthQuestion } from "components/FourthQuestion"; //Pick favo snacks and drinks
import { FinalText } from "components/FinalText";

export const App = () => {
  const [question, setQuestion] = useState('landingPage');
  const [destination, setDestination] = useState();
  const [number, setNumber] = useState();
  const [day, setDay] = useState();
  const [snacks, setSnacks] = useState([]);

  return (
    <>
      {question !== 'summary' ? (
        <section id="questions-container">
            {question === 'landingPage' && (
                <LandingPage setQuestion={setQuestion}/>
            )}
            {question === 'firstQuestion' && (
                <FirstQuestion destination={destination} setDestination={setDestination} setQuestion={setQuestion}/>   
            )}
            {question === 'secondQuestion' && (
                <SecondQuestion number={number} setNumber={setNumber} setQuestion={setQuestion}/>   
            )}
            {question === 'thirdQuestion' && (
                <ThirdQuestion day={day} setDay={setDay} setQuestion={setQuestion}/>   
            )}
            {question === 'fourthQuestion' && (
                <FourthQuestion snacks={snacks} setSnacks={setSnacks} setQuestion={setQuestion}/>   
            )}
        </section>            
        ) : (           
          <FinalText destination={destination} number={number} day={day} snacks={snacks} />
      )}     
    </>
  );
};