const circle = {
  radius: 1,
  draw: function () {
    console.log('draw');
  },
};

// Constructor
function Circle(radius, location) {
  this.radius = radius;
  this.draw = () => {
    console.log(`drawn ${this.radius}`);
  };
}

newCircle = new Circle(2);

for (let key in newCircle) {
  console.log(key);
  console.log(newCircle[key]);
}

function Stopwatch() {
  let startTime = 0;
  let endTime = 0;
  let duration = 0;
  let active = false;
  this.reset = () => {
    duration = 0;
    running = false;
    startTime = 0;
    endTime = 0;
  };
  this.stop = () => {
    if (!active) throw new Error('Already stopped');
    active = false;
    stopTime = new Date();
    duration += (stopTime - startTime) / 1000;
  };

  this.start = () => {
    if (active) throw new Error('Already started');
    active = true;
    startTime = new Date();
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      return duration;
    },
  });
}

const sw = new Stopwatch();
