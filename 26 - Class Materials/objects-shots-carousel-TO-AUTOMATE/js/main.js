//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const buttonEle = document.querySelector('#getButton');
buttonEle.addEventListener('click', fetchCocktail);

document.querySelector('#incrementButton').addEventListener('click', increment);
document.querySelector('#decrementButton').addEventListener('click', decrement);
document.querySelector('#decrementButton').disabled = true;

let fetchedData = [];
let counter = 0;
function fetchCocktail(e) {
  e.preventDefault();
  // Read in the value
  const search = document.querySelector('input').value.replaceAll(' ', '%20');
  // Update the URL
  url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  // Fetch
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      fetchedData = data.drinks;
      counter = 0;
      parseData();
    });
}

function parseData() {
  const drink = fetchedData[counter];
  //   Update DOM based on fetched data
  document.querySelector('img').src = drink.strDrinkThumb;
  document.querySelector('img').alt = drink.strDrink;
  document.querySelector('h2').innerText = drink.strDrink;
  document.querySelector('h3').innerText = drink.strInstructions.replaceAll(
    '.',
    '\n'
  );
}

function increment() {
  counter++;
  parseData();
  document.querySelector('#decrementButton').disabled = false;
  // Get to the end? Disable the button
  if (counter + 1 > fetchedData.length - 1)
    document.querySelector('#incrementButton').disabled = true;
}

function decrement() {
  counter--;
  parseData();
  document.querySelector('#incrementButton').disabled = false;
  if (counter === 0) document.querySelector('#decrementButton').disabled = true;
}
