// *Variables*
// Create a variable and console log the value
const blah = 5;
console.log(blah);

// Create a variable, add 10 to it, and alert the value
let second = 49;
second = second + 10;
alert(second);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const subFour = (num1, num2, num3, num4) => {
  result = num1 - num2 - num3 - num4;
  alert(result);
};

subFour(5, 6, 79, 92);

// Create a function that divides one number by another and returns the remainder
function findRemainder(num1, num2) {
  return `${num1} divided by ${num2} has a remainder of ${num1 % num2}`;
}

console.log(findRemainder(95, 4));

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoJumanji(num1, num2) {
  num1 + num2 > 50 ? alert('Jumanji') : alert('boring');
}

addTwoJumanji(29, 50);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
const multThree = (num1, num2, num3) =>
  (num1 * num2 * num3) % 3 === 0 ? alert('Zebra') : alert('not divisible');

multThree(5, 2, 7);
