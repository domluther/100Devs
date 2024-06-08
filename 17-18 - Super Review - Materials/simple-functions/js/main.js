//---Easy
//create a function that subtracts two numbers and alerts the difference

function subTwo(num1, num2) {
  alert(num1 - num2);
}

subTwo(5, 2);
//create a function that divides three numbers and console logs the quotient

function divThree(num1, num2, num3) {
  console.log(num1 / num2 / num3);
}

divThree(5, 9, 1);

//create a function that multiplys three numbers and returns the product

function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}

ans = multiplyThree(5, 9, 2);
console.log(ans);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addTwoDivideThirdRemainder(num1, num2, num3) {
  return (num1 + num2) % 3;
}

ans = addTwoDivideThirdRemainder(5, 9, 3);
console.log(ans);
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function takeFour(num1, num2, num3, num4) {
  const product = num1 * num2;
  if (product > 100) console.log(num3 + num4);
  else if (product < 100) console.log(num3 - num4);
  else alert((num1 * num2 * num3) % num4);
}

takeFour(100, 2, 3, 4);
