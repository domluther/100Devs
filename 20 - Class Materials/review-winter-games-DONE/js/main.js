//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function evens(arr) {
  const answer = [];

  //   Using forEach
  arr.forEach((num) => (num % 2 === 0 ? answer.push(num) : ''));

  // Iterate through and if it is even push to array
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] % 2 === 0) answer.push(arr[i]);
  //   }
  return answer;

  //   Filter to just give items divisible by 2 (even)
  // return arr.filter(val => val %2 === 0)
}

const arrIn = [2, 3, 4, 5, 6, 7, 8];
const ans = evens(arrIn);
console.log(ans);
