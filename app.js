// import { isYes } from './src/is-yes.js';

const myButton = document.getElementById('quiz-button');


myButton.onclick = () => {
    const userName = prompt('Hi there! What is your name?');
    
    const myConfirmation = prompt(userName + ', Do you want to take my quiz');

    console.log(myConfirmation);

    const userAnswer = prompt('is my favorite color blueish? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();

    console.log(userAnswer);

    if (userIsCorrect) {
        alert('Right-o!');
    } else {
        alert("Nah");
    }

};
