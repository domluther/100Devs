//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixTVShow {
  constructor(name, rating = 3, tagline, firstEpisode) {
    this.name = name;
    this.rating = rating;
    this.tagline = tagline;
    this.firstEpisode = firstEpisode;
  }

  outputRating() {
    console.log(`${this.name} is rated as ${this.rating} stars`);
  }
  incrementRating() {
    this.rating = Math.min(this.rating + 1, 5);
  }

  decrementRating() {
    this.rating = Math.max(this.rating - 1, 0);
  }

  cancel() {
    console.log(`Sorry to report - ${this.name} has been cancelled`);
  }
}

const strangerThings = new NetflixTVShow(
  'Stranger Things',
  5,
  'The world is turning upside down',
  2016
);

console.log(strangerThings);

strangerThings.outputRating();
strangerThings.incrementRating();
strangerThings.incrementRating();
strangerThings.decrementRating();
strangerThings.decrementRating();
strangerThings.decrementRating();
strangerThings.decrementRating();
strangerThings.outputRating();
strangerThings.cancel();
