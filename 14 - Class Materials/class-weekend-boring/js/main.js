// When the button is pressed - smurf
document.querySelector('#form').addEventListener('submit', lookupDay);

function lookupDay(e) {
  // Don't reload the page
  e.preventDefault();
  // Get day of week typed in
  let inputDay = document.querySelector('#day').value.toLowerCase().trim();

  let outputMessage = '';
  // Decide on the message
  switch (inputDay) {
    case 'tuesday':
    case 'thursday':
      outputMessage = 'class';
      break;
    case 'saturday':
    case 'sunday':
      outputMessage = 'weekend';
      break;
    default:
      outputMessage = 'boring';
      break;
  }
  // Output to DOM
  document.querySelector('#placeToSee').innerText = outputMessage;
}
