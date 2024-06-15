//Create a dog object that has four properties and three methods

const dog = {
  name: 'poppy',
  breed: 'poodle',
  colour: 'purple',
  age: 5,
  woof() {
    console.log('woof');
  },
  getOlder() {
    this.age++;
  },
  details() {
    return `I am ${this.name.toUpperCase()} a ${this.colour} ${this.breed} that is ${this.age} years old.`;
  },
};

dog.woof();
console.log(dog.details());
dog.getOlder();
console.log(dog.details());

function Dog(name, breed, colour, age) {
  this.name = name;
  this.breed = breed;
  this.colour = colour;
  this.age = age;
  this.woof = () => {
    console.log('woof');
  };
  this.getOlder = () => {
    this.age++;
  };
  this.details = () =>
    `I am ${this.name.toUpperCase()} a ${this.colour} ${this.breed} that is ${this.age} years old.`;
}

sally = new Dog('sally', 'strudel', 'silver', 1);

sally.woof();
console.log(sally.details());
sally.getOlder();
console.log(sally.details());
