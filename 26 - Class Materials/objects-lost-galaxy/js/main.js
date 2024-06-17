//Create a dog object that has four properties and three methods

const dog = {};

dog.name = 'bob';
dog.legs = 4;
dog.fur = 'long';
dog.puppies = 10;

dog.woof = function () {
  console.log('woof!');
};
dog.intro = function () {
  console.log(`I am ${this.name} a dog with ${dog.fur} fur.`);
};

dog.haircut = function () {
  dog.fur = 'short';
};

dog.woof();
dog.intro();
dog.haircut();
dog.intro();

const pizza = {};
pizza.toppings = ['salami', 'cheese', 'tomato', 'pineapple'];
pizza.style = 'deep-pan';
pizza.inches = 12;
pizza.area = pizza.inches * pizza.inches * Math.PI;
pizza.slices = 1;

pizza.cut = function () {
  this.slices *= 2;
};
pizza.serve = function () {
  if (this.slices > 0) this.slices -= 1;
  else console.log('there are no slices left');
};

pizza.details = function () {
  console.log(
    `I am a ${this.inches}-inch ${this.toppings.join(', ')} ${this.style} pizza. There are ${this.slices} slices left.`
  );
};

pizza.details();
pizza.cut();
pizza.cut();
pizza.cut();
pizza.serve();
pizza.details();
