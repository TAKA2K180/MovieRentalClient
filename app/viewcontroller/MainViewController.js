Ext.define('irelyTraining.viewcontroller.MainViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-view',

    routes: {
        'movies': 'showMoviesView',
        'customers': 'showCustomersView'
        // Add more routes for other views
    },

    doInit: function () {
        console.log('Controller initialized!');
    },

    onLaunch: function () {
        console.log('Controller launched!');
        this.redirectTo('movies');
    },

    onMainViewRender: function () {
        this.doInit(); // Call doInit during the controller initialization
    },

    onSidebarItemClick: function (treepanel, record) {
        var route = record.get('route');
        if (route) {
            this.redirectTo(route);
        }
    },

    showMoviesView: function () {
        this.getView().down('container[reference=mainContainer]').setActiveItem('admin-movies');
    },

    showCustomersView: function () {
        // Implement logic to show the customers view
    }
});
