//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

let fetchedData;
function getFetch() {
  // const choice = document.querySelector('input').value
  const key = 'DEMO_KEY';
  const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`;

  console.log('hi');
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      parseData(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function parseData(data) {
  document.querySelector('h2').innerText = data.title;
  document.querySelector('img').src = data.url;
  document.querySelector('.details').innerText = data.explanation;
}

// {
//   "copyright": "Marcella Giulia Pace",
//   "date": "2024-06-20",
//   "explanation": "Last April's Full Moon shines through high clouds near the horizon, casting shadows in this garden-at-night skyscape. Along with canine sentinel Sandy watching the garden gate, the wide-angle snapshot also captured the bright Moon's 22 degree ice halo. But June's bright Full Moon will cast shadows too. This month, the Moon's exact full phase occurs at 01:08 UTC June 22. That's a mere 28 hours or so after today's June solstice (at 20:51 UTC June 20), the moment when the Sun reaches its maximum northern declination. Known to some as a Strawberry Moon, June's Full Moon is at its southernmost declination, and of course will create its own 22 degree halos in hazy night skies.",
//   "hdurl": "https://apod.nasa.gov/apod/image/2406/MoonHalo_pace.jpg",
//   "media_type": "image",
//   "service_version": "v1",
//   "title": "Sandy and the Moon Halo",
//   "url": "https://apod.nasa.gov/apod/image/2406/MoonHalo_pace.jpg"
// }
