
Ext.define('irelyTraining.model.Movie', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'price', type: 'float' },
        { name: 'category', type: 'string' },
        { name: 'transactionDate', type: 'date', dateFormat: 'Y-m-d\\TH:i:s' }
    ],

    idProperty: 'id'
});
