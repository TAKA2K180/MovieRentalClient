Ext.define('irelyTraining.view.admin.Movies', {
    extend: 'Ext.panel.Panel',
    xtype: 'admin-movies',

    viewModel: {
        type: 'admin-movies'
    },

    controller: 'admin-movies',

    layout: 'border',

    items: [
        {
            xtype: 'grid',
            title: 'Movie List',
            region: 'center',
            bind: {
                store: '{movies}'
            },
            columns: [
                { text: 'Title', dataIndex: 'title', flex: 1 },
                { text: 'Description', dataIndex: 'description', flex: 1 },
                { text: 'Price', dataIndex: 'price', flex: 1 },
                { text: 'Category', dataIndex: 'category', flex: 1 },
                { text: 'Transaction Date', dataIndex: 'transactionDate', flex: 1, xtype: 'datecolumn', format: 'Y-m-d' },
                // Add more columns as needed
            ],
            listeners: {
                itemdblclick: 'onMovieGridDoubleClick'
            }
        },
        {
            xtype: 'form',
            reference: 'movieForm', // Add a reference for the form
            title: 'Edit Movie',
            region: 'east',
            width: 300,
            bind: {
                hidden: '{!selectedMovie}'
            },
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    bind: '{selectedMovie.title}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Description',
                    bind: '{selectedMovie.description}'
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Price',
                    bind: '{selectedMovie.price}'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Category',
                    bind: '{selectedMovie.category}'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Transaction Date',
                    bind: '{selectedMovie.transactionDate}',
                    format: 'Y-m-d'
                },
                // Add more form fields as needed
                {
                    xtype: 'button',
                    text: 'Save',
                    handler: 'onSaveButtonClick'
                }
            ]
        }
    ],

    listeners: {
        render: 'onMoviesViewRender' // Ensure the store is loaded when the view is rendered
    }
});
