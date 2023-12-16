Ext.define('irelyTraining.view.admin.Movies', {
    extend: 'Ext.panel.Panel',
    xtype: 'admin-movies',
    reference: 'movieForm',

    viewModel: {
        type: 'admin-movies'
    },

    controller: 'admin-movies',

    layout: 'border',

    items: [
        {
            xtype: 'grid',
            region: 'center',
            bind: {
                store: '{movies}'
            },
            tbar: [
                {
                    xtype: 'button',
                    text: 'Add Movie',
                    iconCls: 'x-fa fa-plus',
                    handler: 'onAddButtonClick' // Handle click in the ViewController
                }
            ],
            title: {
                text: 'Movie List',
                tools: [
                    {
                        xtype: 'button',
                        iconCls: 'x-fa fa-plus',
                        handler: 'onAddButtonClick' // Handle click in the ViewController
                    }
                ]
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
                // ... (unchanged form fields)
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
