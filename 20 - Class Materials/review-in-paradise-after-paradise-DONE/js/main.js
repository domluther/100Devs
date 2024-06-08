// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

// Did using return instead of alert cos works with Quokka
function takeInArray(arr) {
  if (arr.at(0) < arr.at(-1)) return 'Hi';
  if (arr.at(0) > arr.at(-1)) return 'Bye';
  if (arr.at(0) === arr.at(-1)) return 'We close in an hour';
}

const arrIn = [4, 2, 4];
const ans = takeInArray(arrIn);
console.log(ans);
