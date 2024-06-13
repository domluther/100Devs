// Here the function makeUser returns an object.

// What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name); // What's the result?

// Create a calculator
// importance: 5
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  valA: 0,
  valB: 0,
  // Got lazy - hard coded instead of prompting
  read() {
    valA = 3;
    valB = 4;
  },
  sum() {
    return valA + valB;
  },
  mul() {
    return valA * valB;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

// Chaining
// importance: 2
// There’s a ladder object that allows you to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};
// Now, if we need to make several calls in sequence, we can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
// Modify the code of up, down, and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// Such an approach is widely used across JavaScript libraries.
