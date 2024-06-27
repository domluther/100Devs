// Make a card game of War

/*
2 players
Each player draws their next card
Highest card wins, winner gets the pair of cards
Tie? Declare 'war'
Put down 3 cards. Flip 4th card and highest wins all 8 cards.

https://deckofcardsapi.com/

*/

document.querySelector('#startGame').addEventListener('click', startGame);

function startGame() {
  // Get a new deck and draw the 52 cards
  const newDeckURL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

  const p1Cards = [];
  const p2Cards = [];

  fetch(newDeckURL)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem('deckId', data.deck_id);
      console.log(localStorage.getItem('deckId'));
      console.log(data.cards);
      for (let i = 0; i < data.cards.length; i++) {
        if (i % 2 === 0) p1Cards.push(data.cards[i].code);
        else {
          p2Cards.push(data.cards[i].code);
        }
      }
      console.log(p1Cards);
      console.log(p2Cards);
    })
    .catch((err) => {
      console.error(`error ${err}`);
    });
  const addToPileURL = `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/add/?cards=${cardsToAdd}`;
  // Create player 1 pile + player 2 pile
}

function getFetch() {
  const choice = document.querySelector('input').value;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
