//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const date = document.querySelector('input').value;
  const apiKey = '';
  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector('#title').innerText = data.title;
      document.querySelector('#explanation').innerText = data.explanation;
      if (data.media_type === 'image') {
        document.querySelector('#potd').src = data.url;
      } else {
        document.querySelector('#potd').src = '';
        document.querySelector('iframe').src = data.url;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
