//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const buttonEle = document.querySelector('button');
buttonEle.addEventListener('click', fetchCocktail);

function fetchCocktail(e) {
  e.preventDefault();
  // Read in the value
  const search = document.querySelector('input').value.replaceAll(' ', '%20');
  // Update the URL
  url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  // Fetch
  fetch(url)
    .then((res) => res.json())
    .then((data) => parseData(data));
}

function parseData(data) {
  // Destructure the first drink
  const [first] = [...data.drinks];
  console.log(first);
  //   Update DOM based on fetched data
  document.querySelector('img').src = first.strDrinkThumb;
  document.querySelector('img').alt = first.strDrink;
  document.querySelector('h2').innerText = first.strDrink;
  document.querySelector('h3').innerText = first.strInstructions.replaceAll(
    '.',
    '\n'
  );
}
