//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      // Make empty first
      const classList = document.querySelector('.classes');
      const subClassList = document.querySelector('.subclasses');

      classList.innerHTML = '';
      subClassList.innerHTML = '';

      document.querySelector('.spellName').innerText = data.name;
      const usableClasses = data.classes;
      for (usableClass of usableClasses) {
        const li = document.createElement('li');
        li.textContent = usableClass.name;
        classList.appendChild(li);
      }
      const subClasses = data.subclasses;
      for (subClass of subClasses) {
        subClassList.innerHTML += `<li>${subClass.name}</li>`;
      }
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
