Ext.define('irelyTraining.view.admin.MoviesModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.admin-movies',

    data: {
        selectedMovie: null
    },

    stores: {
        movies: {
            type: 'movies' // Reference to the Movie store
        }
    }
});
