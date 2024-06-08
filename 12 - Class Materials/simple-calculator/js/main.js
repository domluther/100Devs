let total = 0;
// Add code for the other 4 options.

document.querySelector('#pumpkin').addEventListener('click', resetTotal);
document.querySelector('#dominosPizza').addEventListener('click', addThree);
document.querySelector('#zebra').addEventListener('click', addNine);
document
  .querySelector('#cantThinkOfAnything')
  .addEventListener('click', minusTwo);
document.querySelector('#oneMore').addEventListener('click', timesEight);

function resetTotal() {
  total = 0;
  updateValue();
}

function addThree() {
  total = total + 3;
  updateValue();
}

function addNine() {
  total = total + 9;
  updateValue();
}

function minusTwo() {
  total = total - 2;
  updateValue();
}

function timesEight() {
  total = total * 8;
  updateValue();
}

function updateValue() {
  document.querySelector('#placeToPutResult').innerHTML = total;
}
