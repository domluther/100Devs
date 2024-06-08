//Create a stopwatch object that has four properties and three methods

const stopwatch = {
  colour: 'black',
  minutes: 5,
  seconds: 20,
  brand: 'casio',
  describeSelf() {
    console.log(`I am a ${this.colour} stopwatch`);
  },
  reset() {
    this.minutes = 0;
    this.seconds = 0;
  },
  sayTime() {
    console.log(`Current time: ${this.minutes}:${this.seconds}`);
  },
};

stopwatch.describeSelf();
stopwatch.sayTime();
stopwatch.reset();
stopwatch.sayTime();
