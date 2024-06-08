// *Variables*
// Create a variable and console log the value
const first = 'hi';
console.log(first);

// Create a variable, add 10 to it, and alert the value
const second = 24;
alert(second + 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

const subFour = (num1, num2, num3, num4) => alert(num1 - num2 - num3 - num4);

subFour(1, 2, 3, 4);

// Create a function that divides one number by another and returns the remainder

function divOneByAnother(num1, num2) {
  return num1 % num2;
}

console.log(divOneByAnother(5, 3));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function twoNumSum(num1, num2) {
  if (num1 + num2 > 50) alert('Jumanji');
}

twoNumSum(50, 20);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multThree(num1, num2, num3) {
  if ((num1 * num2 * num3) % 3 === 0) alert('ZEBRA');
}

multThree(50, 30, 2);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function repeatWord(word, reps) {
  for (let i = 1; i <= reps; i++) {
    console.log(word);
  }
}

repeatWord('monkey', 13);
