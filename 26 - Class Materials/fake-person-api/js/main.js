//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const url = 'https://randomuser.me/api/';

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      const results = data.results[0];
      document.querySelector('#fullName').innerText =
        `${results.name.title} ${results.name.first} ${results.name.last}`;
      document.querySelector('#profilePic').src = results.picture.large;
      document.querySelector('#email').innerText = results.email;
      document.querySelector('#location').innerText =
        `${results.location.city} ${results.location.country}`;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
