//Create a constructor with 4 properties and 3 methods

function Pizza(topping, inches, crust) {
  this.topping = topping;
  this.inches = inches;
  this.crust = crust;
  this.area = Math.pow(this.inches, 2) * Math.PI;

  this.deliver = function () {
    console.log('delivering');
  };
  this.frisbee = function () {
    console.log('frisbeed away');
  };
}

const firstPizza = new Pizza('cheese', 12, 'thin');

console.log(firstPizza);
firstPizza.deliver();
firstPizza.frisbee();

class Pizza2 {
  constructor(topping, inches, crust) {
    this.topping = topping;
    this.inches = inches;
    this.crust = crust;
    this.area = Math.pow(this.inches, 2) * Math.PI;
  }

  burnMouth() {
    console.log('OH GOD ITS HOT');
  }
  estimateDelivery() {
    console.log('Calculating...');
  }
}

const secondPizza = new Pizza2(['salami', 'cheese'], 10, 'thin');

console.log(secondPizza);
