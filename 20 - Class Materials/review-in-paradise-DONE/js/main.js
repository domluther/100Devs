// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'pizza';
food = 'cheese';
alert(food);

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let newVar = 'hello';
alert(newVar[1]);

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

const threeNums = (num1, num2, num3) => alert((num1 / num2) * num3);

threeNums(3, 9, 10);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
const cubeRoot = (num) => console.log(Math.cbrt(num).toFixed(3));

cubeRoot(12);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function monthFeedback(month) {
  switch (month) {
    case 'June':
    case 'July':
    case 'August':
      alert('YAY');
      break;
    default:
      alert('Booo');
      break;
  }
}

monthFeedback('October');

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function numStuff(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 5 === 0) '';
    else console.log(i);
  }
}

numStuff(25);
