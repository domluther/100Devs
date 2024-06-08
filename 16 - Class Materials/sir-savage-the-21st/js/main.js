//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function print21() {
  for (let i = 1; i <= 21; i++) {
    // Output 21 times
    console.log(21);
    // Add to DOM 21 times
    document.querySelector('#savageSays').innerText += '21\n';
  }
}

print21();
