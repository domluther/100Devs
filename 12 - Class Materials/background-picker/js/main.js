// Depending on the item that is clicked, change the background colour of the page.
document.querySelector('#purple').addEventListener('click', function () {
  setStyle('purple', 'green');
});
document.querySelector('#green').addEventListener('click', function () {
  setStyle('green', 'blue');
});
document.querySelector('#blue').addEventListener('click', function () {
  setStyle('blue', 'purple');
});
document.querySelector('#black').addEventListener('click', function () {
  setStyle('black', 'white');
});
document.querySelector('#reset').addEventListener('click', function () {
  setStyle('white', 'black');
});

const bodyEle = document.querySelector('body');

function setStyle(backgroundColour, textColour) {
  bodyEle.style.background = backgroundColour;
  bodyEle.style.color = textColour;
}
