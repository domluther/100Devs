// Write the code, one line for each action:

// Create an empty object user.
const user = {};
// Add the property name with the value John.
user['name'] = 'John';
console.log(user);
// Add the property surname with the value Smith.
user.surname = 'Smith';
console.log(user);
// Change the value of the name to Pete.
user.name = 'Pete';
console.log(user);
// Remove the property name from the object.
delete user['name'];
delete user.name;
console.log(user);

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// function isEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }

// Using for in
function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false

// Sum object properties
// importance: 5
// We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

let sum = 0;
for (person in salaries) {
  sum += salaries[person];
}
// If salaries is empty, then the result must be 0.
console.log(sum);

// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (prop in obj) {
    const value = obj[prop];
    if (typeof value === 'number') {
      obj[prop] = value * 2;
    }
  }
}
multiplyNumeric(menu);

console.log(menu);

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.
