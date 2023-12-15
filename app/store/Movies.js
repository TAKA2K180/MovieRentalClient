Ext.define('irelyTraining.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',

    model: 'irelyTraining.model.Movie', // Adjust the model name

    proxy: {
        type: 'ajax',
        url: 'https://localhost:7106/api/v1/Movies', // Replace with your actual API endpoint
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    },

    autoLoad: true // Optionally load the data immediately upon store creation
});
