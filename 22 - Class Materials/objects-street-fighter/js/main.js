//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighter(name, aAttack, bAttack, specialMove) {
  this.name = name;
  this.aAttack = aAttack;
  this.bAttack = bAttack;
  this.specialMove = specialMove;
  this.aPushed = () => {
    console.log(`${this.name} uses ${this.aAttack}`);
  };
  this.bPushed = () => {
    console.log(`${this.name} uses ${this.bAttack}`);
  };
  this.useSpecial = () => {
    console.log(`${this.name} uses ${this.specialMove} and wins!`);
  };
}

char1 = new StreetFighter('Ken', 'punch', 'kick', 'fireball');
char2 = new StreetFighter('Chun-Li', 'slap', 'headbutt', 'flying kick');

char1.aPushed();
char1.bPushed();
char1.useSpecial();

char2.aPushed();
char2.bPushed();
char2.useSpecial();
