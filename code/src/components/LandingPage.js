import React from "react";

export const LandingPage = ({setQuestion}) => {  
  return (
    <>
      <main className="welcome-box">
        <h1>VACATION PLANS GENERATOR</h1>
        <h2>Your corona-friendly Digital Getaway</h2>
        <button 
          className="start-button"
          onClick={() => setQuestion('firstQuestion')}>
            Dream Away!
        </button>
      </main>
    </>
  );
};