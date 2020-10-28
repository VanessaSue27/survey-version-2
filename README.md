# Survey form with React
⚛This is a redo of my original Project Survey - a good practice for React state and controlled forms by making a Typeform like product:
Build a survey form using React which should consist of at least 3 questions - When pressing submit, the user should see a summary of their answers. I've chosen a Digital Vacation theme 🌴, since traveling is so limited right now and we all need that sort of getaway. Users will get a dream vacation summary after answering some questions. ☀

## How I built it - What I learned
- I had a very ambitious idea since the beginning to make the survey dynamic, so that questions will appear after the user entered an answer and clicks on the Next button 💪. 
- I started by separating the landing page, results page and questions into separate components.
- The components are connected via States listed in the main App which are sent as props and which will save the data entered by the user.
- I created a "setQuestion" State which will generate the next question accordingly with the help of a button with an onClick function.
- Put some extra time into the styling and customized radio buttons and checkboxes 🎈

## View it live
Craving for that dream getaway during these pressing corona times 😎, check out my Vacation Generator, live here: https://vacation-generator.netlify.app/
