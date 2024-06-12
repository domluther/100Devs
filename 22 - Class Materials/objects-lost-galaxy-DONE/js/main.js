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

function Mouse(name, colour, legs = 4) {
  this.name = name;
  this.colour = colour;
  this.legs = legs;
  this.sayHi = function () {
    console.log(
      `I am ${this.name} the ${this.colour} mouse with ${this.legs} legs`
    );
  };
  this.growLeg = function (num) {
    this.legs += num;
  };
  this.squeak = function () {
    console.log('SQUEAK!');
  };
}

Mouse.prototype.favouriteFood = 'cheese';

const mickey = new Mouse('Mickey', 'white');
const minnie = new Mouse('Minnie', 'pink');

mickey.sayHi();
minnie.growLeg(2);
minnie.sayHi();
mickey.sayHi();
console.log(mickey.favouriteFood);
