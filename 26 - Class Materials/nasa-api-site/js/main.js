//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  // const choice = document.querySelector('input').value
  // Not working when tested 18th June - down?
  const url = 'https://api.nasa.gov/planetary/apod?api_key=MYKEY';

  console.log('hi');
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
