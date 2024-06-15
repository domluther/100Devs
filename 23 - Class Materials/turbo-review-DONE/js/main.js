// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question

const sent = 'hello how are you?';
sent.endsWith('?') ? console.log('question') : console.log('not a question');

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let words = 'hello I am a jr. dev, nice to meet you';
words = words.replaceAll('jr. dev', 'software engineer');
console.log(words);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
const rps = () => {
  const choice = Math.random();
  if (choice < 0.33333) return 'rock';
  if (choice < 0.66666) return 'paper';
  return 'scissors';
};

const ans = rps();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

const playRPS = (playerChoice) => {
  const botChoice = rps();
  if (botChoice === playerChoice) return 'tie';
  if (
    (playerChoice === 'rock' && botChoice === 'scissors') ||
    (playerChoice === 'paper' && botChoice === 'rock') ||
    (playerChoice === 'scissors' && botChoice === 'paper')
  )
    return 'you win';
  return 'you lose';
};

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
const playManyRPS = (choices) => {
  for (choice of choices) {
    console.log(playRPS(choice));
  }
};

const gamesToPlay = [
  'rock',
  'paper',
  'paper',
  'paper',
  'paper',
  'paper',
  'paper',
  'paper',
];
playManyRPS(gamesToPlay);
