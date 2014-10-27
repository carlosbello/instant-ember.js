MovieTracker.ApplicationController = Ember.Controller.extend();

MovieTracker.moviesController = Ember.ArrayController.create({
    content: [],
    init: function () {
        // HACK! Change for Ember 1.7: Removed the this _super() call because a deprecation error message
        // this dog _super();
        
        var list = [
            MovieTracker.Movie.create({title: 'Movie 1', rating: 4}),
            MovieTracker.Movie.create({title: 'Movie 2', rating: 5})
        ];
        this.set('content', list);
    }
});

MovieTracker.selectedMovieController = Ember.ObjectController.create({
    selectedMovie: [],
    
    select: function (item) {
        this.set('selectedMovie', item);
    },
    toogleWatched: function () {
        this.selectedMovie.toogleProperty('watched');
    }
});