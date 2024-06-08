// When a contestant is clicked on
const contestants = document.querySelectorAll('.contestant');
contestants.forEach((contestant) =>
  contestant.addEventListener('click', checkRose)
);

function checkRose(e) {
  // If they had the class rose, say winner
  if (e.target.classList.contains('rose')) {
    const winnerName = e.target.innerText.toLowerCase();
    const winnerSelector = `#${winnerName}`;
    document.querySelector(winnerSelector).classList.toggle('hidden');
  } else {
    // Otherwise say no you lose

    alert('No you lose');
  }
}
