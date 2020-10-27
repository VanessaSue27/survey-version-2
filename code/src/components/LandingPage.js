import React from "react";

export const LandingPage = ({setQuestion}) => {  
  return (
    <>
      <main>
        <h1>Welcome to the Survey!</h1>
        <h2>My attempt to practice more React State</h2>
        <button onClick={() => setQuestion('firstQuestion')}>Start the Survey</button>
      </main>
    </>
  );
};