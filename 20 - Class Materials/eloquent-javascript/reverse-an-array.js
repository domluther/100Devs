function reverseArray(arr) {
  const newArr = [];
  // Iterate through the array backwards, push into new array
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArrInPlace(arr) {
  // Iterate through half the array
  const arrLen = Math.floor(arr.length / 2);
  for (let i = 0; i < arrLen; i++) {
    // Mirror items
    let valAtI = arr[i];
    let mirrorValAtI = arr[arr.length - 1 - i];
    arr[i] = mirrorValAtI;
    arr[arr.length - 1 - i] = valAtI;
  }
}

let myArray = ['A', 'B', 'C'];
reverseArray(myArray);
console.log(myArray);
let myArray2 = ['A', 'B', 'C', 'D'];
console.log(myArray2);
reverseArrInPlace(myArray2);
console.log(myArray2);
