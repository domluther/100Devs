//---Easy
//create a function that subtracts two numbers and alerts the difference

subTwo = (num1, num2) => {
  alert(num1 - num2);
};

subTwo(5, 2);

//create a function that divides three numbers and console logs the quotient

divThree = (num1, num2, num3) => {
  console.log(num1 / num2 / num3);
};

divThree(10, 3, 2);

//create a function that multiplys three numbers and returns the product

multThree = (num1, num2, num3) => {
  return num1 * num2 * num3;
};

const ans = multThree(10, 39, 30);
console.log(ans);

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function addAndReturn(num1, num2, num3) {
  return (num1 + num2) % num3;
}

console.log(addAndReturn(49, 29, 5));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number

function hardTimes(num1, num2, num3, num4) {
  const first = num1 * num2;
  if (first > 100) console.log(num3 + num4);
  else if (first < 100) console.log(num3 - num4);
  else alert((num1 * num2 * num3) % num4);
}

hardTimes(10, 10, 20, 4);

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}
