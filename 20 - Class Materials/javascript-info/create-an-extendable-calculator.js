// Create a constructor function Calculator that creates “extendable” calculator objects.

// The task consists of two parts.

// First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.

// Usage example:

// let calc = new Calculator;

// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.

class Calculator {
  constructor() {
    // Base methods that are understood
    this.methods = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
    };
  }

  calculate(calculation) {
    const [op1, operand, op2] = calculation.split(' ');
    const num1 = parseFloat(op1);
    const num2 = parseFloat(op2);
    if (this.methods[operand] === undefined) return 'Not implemented';
    return this.methods[operand](num1, num2);
  }

  addMethod(operand, calcFunction) {
    this.methods[operand] = calcFunction;
  }
}

let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);
const ans = powerCalc.calculate('1 - 2');
console.log(ans);
const ans2 = powerCalc.calculate('8 + 2');
console.log(ans2);
