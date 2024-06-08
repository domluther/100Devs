// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 29 };

let arr = [john, pete, mary];

function getAverageAge(arrIn) {
  let ageSum = arrIn.reduce((acc, cur) => acc + cur.age, 0);
  console.log(ageSum);
  return ageSum / arrIn.length;
}

const ans = getAverageAge(arr);
console.log(ans);
