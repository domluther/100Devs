// Two functions – one object
// importance: 2
// Is it possible to create functions A and B so that new A() == new B()?

const obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

console.log(a == b); // true
// If it is, then provide an example of their code.

// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

function Calculator() {
  this.read = () => {
    this.a = 8;
    this.b = 9;
  };
  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());

// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

// Here’s the demo of the code:

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = () => {
    this.value += 3;
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values
