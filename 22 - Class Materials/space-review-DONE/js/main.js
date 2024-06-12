//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const nums = [1, 2, 3, 4, 5, 6];
const sum = nums.reduce((acc, cur) => acc + cur);

console.log(sum);

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squareArr(arrIn) {
  return arrIn.map((val) => val * val);
}

const ans = squareArr(nums);
console.log(ans);

//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'));

//Create a function that takes in a string
//Alert if the string is a palindrome or not

function isPalindrome(str) {
  return str === reverseString(str);
}

const pal = isPalindrome('hih');
console.log(pal);
