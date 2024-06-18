document
  .querySelector('#randomJokeButton')
  .addEventListener('click', getRandom);

document
  .querySelector('#randomJokeButton2')
  .addEventListener('click', getRandom2);

function getRandom() {
  const url =
    'https://v2.jokeapi.dev/joke/Spooky,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // Two part
      if (data.setup && data.delivery) {
        document.querySelector('#joke').innerText = data.setup;
        document.querySelector('#punchline').innerText = data.delivery;
      } else {
        // Single line joke
        document.querySelector('#joke').innerText = '';
        document.querySelector('#punchline').innerText = data.joke;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function getRandom2() {
  const url = 'https://official-joke-api.appspot.com/random_joke';

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.querySelector('#joke').innerText = data.setup;
      document.querySelector('#punchline').innerText = data.punchline;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
