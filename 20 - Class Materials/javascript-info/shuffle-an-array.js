// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

function shuffle(arr) {
  // Shuffle each element of the array 3 times
  for (let i = 0; i < arr.length * 3; i++) {
    const index1 = generateIndex(arr.length);
    const index2 = generateIndex(arr.length);
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
}

function generateIndex(cap) {
  return Math.floor(Math.random() * cap);
}

let arrIn = [1, 2, 3];

shuffle(arrIn);
console.log(arrIn);
