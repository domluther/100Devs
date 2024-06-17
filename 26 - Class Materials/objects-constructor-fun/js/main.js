//Create a constructor with 4 properties and 3 methods

const first = require('eslint-plugin-import/lib/rules/first');

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
