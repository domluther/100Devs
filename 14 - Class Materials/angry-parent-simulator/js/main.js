// When the button is pressed
document.querySelector('#form').addEventListener('submit', yell);

function yell(e) {
  e.preventDefault();

  // Read in the values of the form
  const firstName = document.querySelector('#firstName').value;
  const firstMiddle = document.querySelector('#firstMiddle').value;
  const lastMiddle = document.querySelector('#lastMiddle').value;
  const lastName = document.querySelector('#lastName').value;

  // Concatenate them
  const fullName = `${firstName} ${firstMiddle} ${lastMiddle} ${lastName}`;

  // Output it
  document.querySelector('#placeToYell').innerText = fullName;
  let utterance = new SpeechSynthesisUtterance(fullName);
  speechSynthesis.speak(utterance);
}
