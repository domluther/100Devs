//Create a conditonal that checks their age
let age = 30;

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

function giveFeedback() {
  age = +document.querySelector('input').value;
  let msg = '';
  //If under 16, tell them they can not drive
  if (age < 16) msg += 'Cannot drive';
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
  if (age < 18)
    msg +=
      "\nthey can't hate from outside the club, because they can't even get in";
  //If under 21, tell them they can not drink
  if (age < 21) msg += '\ncant drink';
  //If under 25, tell them they can not rent cars affordably
  if (age < 25) msg += '\ncannot rent cars affordably';
  //If under 30, tell them they can not rent fancy cars affordably
  if (age < 30) msg += '\nno fancy affordable cars';
  //If under over 30, tell them there is nothing left to look forward too
  if (age > 30) msg += '\nNothing to look forward to';
  document.querySelector('p').innerHTML = msg;
}

const h1Ele = document.querySelector('h1');
h1Ele.addEventListener('click', giveFeedback);
