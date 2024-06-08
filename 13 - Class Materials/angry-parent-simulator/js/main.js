document.querySelector('#yell').addEventListener('click', yell);
const synth = window.speechSynthesis;

function yell() {
  const firstName = document.querySelector('#firstName').value;
  const firstMiddleName = document.querySelector('#firstMiddle').value;
  const lastMiddleName = document.querySelector('#lastMiddle').value;
  const lastName = document.querySelector('#lastName').value;

  // String literal - easier to concatenate
  const fullName = `${firstName} ${firstMiddleName} ${lastMiddleName} ${lastName}`;

  document.querySelector('#placeToYell').innerText = fullName;
  let yellThis = new SpeechSynthesisUtterance(fullName);
  synth.speak(yellThis);
}
