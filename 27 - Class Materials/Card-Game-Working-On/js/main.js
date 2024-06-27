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
document.querySelector('#nextMove').addEventListener('click', nextMove);

async function startGame() {
  // Get a new deck and draw the 52 cards
  const newDeckURL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=52';

  const p1Pile = [];
  const p2Pile = [];

  // Fetch a new deck
  const newDeckRes = await fetch(newDeckURL);
  const newDeckData = await newDeckRes.json();

  localStorage.setItem('deckId', newDeckData.deck_id);

  // Split the card into two piles
  for (let i = 0; i < newDeckData.cards.length; i++) {
    if (i % 2 === 0) p1Pile.push(newDeckData.cards[i].code);
    else {
      p2Pile.push(newDeckData.cards[i].code);
    }
  }
  // Create initial two piles
  await addCardsToPile(p1Pile, 'p1Cards');
  await addCardsToPile(p2Pile, 'p2Cards');
}

async function addCardsToPile(pile, pileName) {
  const deckId = localStorage.getItem('deckId');
  let cardsToAdd = pile.join(',');
  console.debug(`Adding to ${pileName}`);

  await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}/add/?cards=${cardsToAdd}`
  );
}

async function nextMove() {
  // Draw two cards
  const cards = await drawCard('p1');
  console.log(cards);
}

async function drawCard(pileName, count = 1) {
  const deckId = localStorage.getItem('deckId');
  const drawURL = `https://deckofcardsapi.com/api/deck/${deckId}/pile/${pileName}Cards/draw/?${count}`;

  const res = await fetch(drawURL);
  const data = await res.json();
  console.log(data);
  return data.cards;
}
