// app/viewcontroller/admin/MoviesController.js

Ext.define('irelyTraining.view.admin.MoviesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.admin-movies',

    onMoviesViewRender: function () {
        var moviesStore = this.getViewModel().getStore('movies');
        moviesStore.load();
    },

    onMovieGridDoubleClick: function (grid, record) {
        var form = this.lookupReference('movieForm');

        form.loadRecord(record);
        form.show();
    },

    onSaveButtonClick: function () {
        var form = this.lookupReference('movieForm');
        var record = form.getRecord();

        form.updateRecord(record);
        form.hide();
    }
});
