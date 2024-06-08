//Create an array of movies with at least three movies.
const movies = ['The Lion King', 'If', 'Planet of the Apes'];
//Using the array from above, store the first movie in a variable
const first = movies[0];
const [altFirst] = movies;
//Get the length of the original array and store it in a new variable

const arrLength = movies.length;

//Get the last element in that array and store it in a new variable. What if your array was really large and you didn't know the last index? Would your solution still work?
const last = movies.at(-1);
const lastAlt = movies[arrLength - 1];

console.log(movies);
console.log(first);
console.log(altFirst);
console.log(arrLength);
console.log(last);
console.log(lastAlt);
