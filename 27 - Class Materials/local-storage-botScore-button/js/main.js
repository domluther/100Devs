//Create a button that adds 1 to a botScore stored in localStorage
if (!localStorage.getItem('botScore')) localStorage.setItem('botScore', 0);
displayScore();
document.querySelector('#increase').addEventListener('click', increaseScore);
document
  .querySelector('#increase')
  .addEventListener('click', localStorage.clear());

function increaseScore() {
  localStorage.setItem('botScore', +localStorage.getItem('botScore') + 1);
  displayScore();
}

function displayScore() {
  document.querySelector('h2').innerText =
    `Score: ${localStorage.getItem('botScore')}`;
}
