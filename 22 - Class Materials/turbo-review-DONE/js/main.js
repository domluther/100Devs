// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console

let drink = 'irn-bru';

console.log(drink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".

let words = 'the world is apple';
console.log(words.split(' ').includes('apple'));

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps() {
  const num = Math.random();
  if (num < 0.3333) return 'rock';
  else if (num < 0.66666) return 'paper';
  else return 'scissors';
}

console.log(rps());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function playRPS(choice) {
  const computer = rps();
  if (choice === computer) return 'tie';
  else if (choice === 'rock' && computer === 'scissors') return 'you win';
  else if (choice === 'paper' && computer === 'rock') return 'you win';
  else if (choice === 'scissors' && computer === 'paper') return 'you win';
  else return 'you lose';
}

playRPS('rock');

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playRPSlots(choices) {
  for (choice of choices) {
    const result = playRPS(choice);
    console.log(result);
  }
}

playRPSlots(['rock', 'paper', 'scissors', 'scissors', 'paper']);
