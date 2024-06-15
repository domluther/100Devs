//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch('https://dog.ceo/api/breeds/image/random')
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    const splitURL = data.message.split('/');
    const rawBreed = splitURL[4];
    const breed = parseBreed(rawBreed);
    const dogURL = data.message;
    document.querySelector('img').src = dogURL;
    document.querySelector('h1').innerText = breed;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });

function parseBreed(breed) {
  const breedWords = breed.split('-').reverse();
  console.log(breedWords);
  return breedWords
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join(' ');
}

// function filterRangeInPlace(arr, a, b) {
//   // Go through every element in the array
//   for (let i = 0; i < arr.length; i++) {
//     // Get the next value from the array
//     let val = arr[i];

//     // Filter if the value is less than a or bigger than b
//     if (val < a || val > b) {
//       // Remove that value
//       arr.splice(i, 1);
//       // Drop the counter down because the array is now 1 shorter
//       i--;
//     }
//   }
// }
// let arr = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

// filterRangeInPlace(arr, 1, 4);

// console.log(arr);
