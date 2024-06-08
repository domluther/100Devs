// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let newVar;
newVar = 'EASTER';
console.log(newVar);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let secondVar;
secondVar = 'Exciting times';
console.log(secondVar.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function fiveNumFun(num1, num2, num3, num4, num5) {
  return 100 - num1 - num2 - num3 - num4 - num5;
}

console.log(fiveNumFun(2, 3, 4, 5, 6));

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestHighestOfThree(num1, num2, num3) {
  console.log(Math.min(num1, num2, num3));
  console.log(Math.max(num1, num2, num3));
}

lowestHighestOfThree(3, 9, 5);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsOrTails() {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const HoT = headsOrTails();
console.log(HoT);

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function manyHeadsOrTails(num) {
  for (let i = 0; i < num; i++) {
    console.log(headsOrTails());
  }
}

manyHeadsOrTails(50);
