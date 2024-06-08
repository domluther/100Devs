//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const tvShows = ['simpsons', 'south park', 'power rangers'];
for (tvShow of tvShows) {
  console.log(tvShow);
}

//Create and array of numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Return a new array of numbers that includes every even number from the previous Arrays
const evens = nums.filter((num) => num % 2 === 0);
console.log(evens);

//Create a function that takes in an array of numbers
function numMagic(arr) {
  arr.sort((a, b) => a - b);
  const secondLowest = arr.at(1);
  const secondHighest = arr.at(-1);
  console.log(secondLowest + secondHighest);
}
//Alert the sum of the second lowest and the second highest number

const arrIn = [3, 5, 7, 2, 5, 3, 9, 1];
numMagic(arrIn);
