//Create a mouse object that has four properties and three methods

// Creating as a literal object instead of using a constructor
const mouse = {
  name: 'Bob',
  colour: 'grey',
  legs: 4,
  sayHi() {
    console.log(
      `I am ${this.name} the ${this.colour} mouse with ${this.legs} legs`
    );
  },
  growLeg(num) {
    this.legs += num;
  },
  squeak() {
    console.log('SQUEAK!');
  },
};

mouse.sayHi();
mouse.growLeg(2);
mouse.sayHi();
mouse.squeak();

const computerMouse = {
  model: 'Apple',
  buttons: 3,
  colour: 'silver',
  wireless: true,

  leftClick() {
    console.log('Left clicked!');
  },
  rightClick() {
    console.log("Right clicks don't exist - it is Apple");
  },
  wiggle() {
    console.log('cursor moved');
  },
};

computerMouse.leftClick();
computerMouse.rightClick();
computerMouse.wiggle();
