//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const nums = [2, 43, 5, 7, 7, 324, 3129];
const total = nums.reduce((acc, cur) => acc + cur);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const sqNums = (arrIn) => {
  return arrIn.map((val) => val * val);
};

const squared = sqNums(nums);
console.log(squared);

//Create a function that takes string
//Print the reverse of that string to the console
const reverseStr = (str) => {
  let output = '';
  //   Iterate through it backwards
  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
};

console.log(reverseStr('hello'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not
const isPal = (str) => {
  return str === reverseStr(str);
};

console.log(isPal('racecar'));
