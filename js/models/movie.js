MovieTracker.Movie = Ember.Object.extend({
    id: null,
    tittle: null,
    watched: false,
    rating: 0
});

MovieTracker.ActionMovie = MovieTracker.Movie.extend({
    genere: "action"
});