Ext.application({
    extend: 'irelyTraining.Application',

    name: 'irelyTraining',

    requires: [
        'irelyTraining.*'
    ],

    views: [
        // Add other views here if needed
        'irelyTraining.view.main.MainView'
    ],

    controllers: [
        // Add other controllers here if needed
        'irelyTraining.viewcontroller.MainViewController'
    ],

    // The name of the initial view to create.
    mainView: 'irelyTraining.view.main.MainView'
});
