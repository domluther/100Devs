//Create an array of movie titles. Loop through the array and each element to the h2.
const movies = [
  'The Lion King',
  'Bambi',
  'Life of Pi',
  'Kingdom of the Planet of Apes',
];
const h2Ele = document.querySelector('h2');
movies.forEach((x) => (h2Ele.innerText += `${x}\n`));

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

const nums = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  nums[i] = nums[i] + 3;
}
console.log(nums);
//Find the average of all the numbers from question three
console.log(sum / nums.length);
