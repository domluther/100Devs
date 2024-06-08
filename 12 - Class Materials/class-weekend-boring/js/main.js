// When the button is pressed, change the DOM based on what is typed in.
// Used switch for a challenge

const checkEle = document.querySelector('#check');
const inputEle = document.querySelector('#day');
checkEle.addEventListener('click', checkValue);

function checkValue() {
  const inputValue = inputEle.value.trim().toLowerCase();
  let msg = '';
  switch (inputValue) {
    case 'tuesday':
    case 'thursday':
      msg = 'CLASS TIMES!';
      break;
    case 'saturday':
    case 'sunday':
      msg = 'weekend to chill';
      break;
    default:
      msg = 'boooooring';
  }
  document.querySelector('#placeToSee').innerHTML = msg;
}
