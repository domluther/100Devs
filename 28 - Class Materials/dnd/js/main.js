//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.querySelector('h2').innerText = data.name;
      const usableClasses = data.classes;
      for (usableClass of usableClasses) {
        document.querySelector('h3').innerText += usableClass.name;
      }
      const subClasses = data.subclasses;
      for (subClass of subClasses) {
        document.querySelector('h4').innerText += usableClass.name;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
