// When you press the name of someone
document.querySelector('#andiNext').addEventListener('click', andiWins);
document.querySelector('#claireNext').addEventListener('click', claireWins);
document.querySelector('#sharleenNext').addEventListener('click', sharleenWins);

// image elements
const andiImage = document.querySelector('#andi');
const claireImage = document.querySelector('#claire');
const sharleenImage = document.querySelector('#sharleen');

function andiWins() {
  andiImage.classList.toggle('hidden');
  claireImage.classList.add('hidden');
  sharleenImage.classList.add('hidden');
}

function claireWins() {
  andiImage.classList.add('hidden');
  claireImage.classList.toggle('hidden');
  sharleenImage.classList.add('hidden');
}

function sharleenWins() {
  andiImage.classList.add('hidden');
  claireImage.classList.add('hidden');
  sharleenImage.classList.toggle('hidden');
}
