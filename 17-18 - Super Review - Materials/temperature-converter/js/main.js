document.querySelector('input').value = 0;

// Read in value from DOM
document.querySelector('button').addEventListener('click', convert);
// Convert to F (9/5 * c) + 32
function convert(e) {
  e.preventDefault();
  c = +document.querySelector('input').value;
  document.querySelector('p').innerText = (c * 9) / 5 + 32;
}
