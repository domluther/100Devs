//--- Easy
//create a variable and assign it a number

let num = 49;

//minus 10 from that number
num -= 10;
//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
let num2 = 0;
//add 25 to that number
num2 += 25;
//alert that number
alert(num2);

//--- Hard
//create a variable that holds the h1

function addOut() {
  num2 = document.querySelector('#danceDanceRevolution').value;
  console.log(num + Number(num2));
}
const h1Ele = document.querySelector('h1');

//add an event listener to that element that console logs the sum of the two previous variables
h1Ele.addEventListener('click', addOut);
