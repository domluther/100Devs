// When the slider is dragged
document.querySelector('#tempSlider').addEventListener('change', convertTemp);

function convertTemp() {
  // Read in the amount in celsius
  const celsius = document.querySelector('#tempSlider').value;
  // Convert it to f

  const f = (celsius * 9) / 5 + 32;
  // Output it
  document.querySelector('#celsius').innerText = celsius;
  document.querySelector('#fahrenheit').innerText = f;
  // Improved version - pick which way to go
}
