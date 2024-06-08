//Create a conditonal that checks their age
// const age = 20;
//If under 16, tell them they can not drive
// if (age < 16) console.log("You can't drive");
// //If under 18, tell them they can't hate from outside the club, because they can't even get in
// if (age < 18) console.log("You can't get in the club");
// //If under 21, tell them they can not drink
// if (age < 21) console.log("You can't drink");
// //If under 25, tell them they can not rent cars affordably
// if (age < 25) console.log("You can't rent affordably");
// //If under 30, tell them they can not rent fancy cars affordably
// if (age < 30) console.log("You can't rent decent cars cheapyl");
// //If under over 30, tell them there is nothing left to look forward too
// if (age > 30) console.log('There is nothing left to look forward to');

//--- Harder
//On click of the h1
document.querySelector('h1').addEventListener('click', checkAge);
//Take the value from the input
function checkAge() {
  const age = document.querySelector('#danceDanceRevolution').value;
  let msg = '';
  //If under 16, tell them they can not drive
  if (age < 16) msg += "You can't drive\n";
  //If under 18, tell them they can't hate from outside the club, because they can't even get in
  if (age < 18) msg += "You can't get in the club\n";
  //If under 21, tell them they can not drink
  if (age < 21) msg += "You can't drink\n";
  //If under 25, tell them they can not rent cars affordably
  if (age < 25) msg += "You can't rent affordably\n";
  //If under 30, tell them they can not rent fancy cars affordably
  if (age < 30) msg += "You can't rent decent cars cheaply\n";
  //If under over 30, tell them there is nothing left to look forward too
  if (age > 30) msg += 'There is nothing left to look forward to\n';

  document.querySelector('#result').innerText = msg;
} //Place the result of the conditional in the paragraph
