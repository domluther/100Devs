//Create a function that grabs the number of snacks from the input and tells you to stop that many times

document.querySelector('#help').addEventListener('click', stopSnacking);

function stopSnacking() {
  document.querySelector('#stops').innerText = '';
  const reps = Number(document.querySelector('input').value);
  for (let i = 1; i <= reps; i++) {
    document.querySelector('#stops').innerText += 'Stop snacking!\n';
  }
}
