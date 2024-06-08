//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function productArr(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

const arrIn = [1, 2, 3, 4, 5, 6];

console.log(productArr(arrIn));
