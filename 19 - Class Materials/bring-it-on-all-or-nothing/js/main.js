// *Variables*
// Declare a variable, assign it a boolean, and alert the value
let bool = true;
alert(bool);

// Declare a variable, reassign it to your favorite color, and console log the value
const favColour = 'pink';
console.log(favColour);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
const fourNums = (num1, num2, num3, num4) => (num1 + num2 + num3) / num4;

console.log(fourNums(1, 3, 4, 5));

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
const twoNums = (num1, num2) => console.log(Math.pow(num1, num2));

twoNums(3, 9);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function alerting(bool, s) {
  if (bool) alert(s);
  if (!bool) console.log(s);
}

alerting(false, 'hi');

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    let output = '';
    if (i % 3 === 0) {
      output += 'fizz';
    }
    if (i % 5 === 0) {
      output += 'buzz';
    }
    if (output === '') output = i;
    console.log(output);
  }
}

fizzBuzz(30);
