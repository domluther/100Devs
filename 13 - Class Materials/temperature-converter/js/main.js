//Write your pseduo code first!

// add a smurf to listen to me clicking (or slider?)
document.querySelector('#convertTemp').addEventListener('click', convert);

function convert() {
  // read in the input
  let tempInC = +document.querySelector('#tempC').value;
  // Convert it to the other format
  let result = tempInC * 1.8 + 32;
  // Output it
  document.querySelector('#tempF').value = result;
}
