//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getRandom);

function getRandom() {
  const choice = document.querySelector('input').value;
  const url = 'https://pokeapi.co/api/v2/pokemon/' + choice;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
