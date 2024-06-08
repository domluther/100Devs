// *Variables*
// Create a variable and console log the value
let num = 3;
console.log(num);

// Create a variable, add 10 to it, and alert the value
let num2 = 4;
num2 += 10;
alert(num2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(num1, num2, num3, num4) {
  let ans = num1 - num2 - num3 - num4;
  alert(ans);
}

// Create a function that divides one number by another and returns the remainder
function returnQuotient(num1, num2) {
  return num1 / num2;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(num1, num2) {
  let sum = num1 + num2;
  if (sum > 50) alert('Jumanji');
}

addTwo(50, 20);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplyThree(num1, num2, num3) {
  let product = num1 * num2 * num3;
  product % 3 === 0 ? alert('Zebra') : console.log('zebra');
}

multiplyThree(4, 8, 2);

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function loopThings(word, number) {
  for (let i = 1; i <= number; i++) {
    console.log(word);
  }
}

loopThings('hello', 15);
