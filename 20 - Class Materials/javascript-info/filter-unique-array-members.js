// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   /* your code */
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

function unique(arr) {
  // Using a set
  //   uniqueItems = new Set(arr);
  //   console.log(uniqueItems);
  //   return Array.from(uniqueItems);

  let uniqueWords = [];
  for (word of arr) {
    // If it's not in the results, add it
    if (!uniqueWords.includes(word)) uniqueWords.push(word);
  }
  return uniqueWords;
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

const ans = unique(strings);
console.log(ans);
