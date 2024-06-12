//Create a mouse object that has four properties and three methods

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
