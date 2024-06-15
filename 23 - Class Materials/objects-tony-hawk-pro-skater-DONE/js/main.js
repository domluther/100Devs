//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods

function Skater(name, age, boardColour, trick) {
  this.name = name;
  this.age = age;
  this.boardColour = boardColour;
  this.trick = trick;
  this.doTrick = () => {
    console.log(`${this.name} just did a sick ${this.trick}`);
  };
  this.intro = () => {
    console.log(
      `I'm ${this.name} a ${this.age} skater riding a ${this.boardColour} and a pro at ${this.trick}`
    );
  };
  this.changeColour = (colour) => {
    console.log(
      `I'm going from my trusty ${this.boardColour} board to a popping ${colour} one!`
    );
    this.boardColour = colour;
  };
}

tony = new Skater('tony', 39, 'silver', 'olly');

tony.doTrick();
tony.intro();
tony.changeColour('pink');
