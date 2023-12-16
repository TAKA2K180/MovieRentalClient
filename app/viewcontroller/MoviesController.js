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

    onAddButtonClick: function () {
        // Create and show the popup window
        Ext.create({
            xtype: 'window',
            title: 'Add Movie',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Title',
                        name: 'title',
                        allowBlank: false,
                        margin: '10'
                    },
                    {
                        xtype: 'textareafield',
                        fieldLabel: 'Description',
                        name: 'description',
                        allowBlank: false,
                        margin: '10'
                    },
                    {
                        xtype: 'numberfield',
                        fieldLabel: 'Price',
                        name: 'price',
                        allowBlank: false,
                        margin: '10'
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Category',
                        name: 'category',
                        allowBlank: false,
                        margin: '10'
                    },
                    {
                        xtype: 'datefield',
                        fieldLabel: 'Transaction Date',
                        name: 'transactionDate',
                        format: 'Y-m-d',
                        allowBlank: false,
                        margin: '10'
                    }
                ]
            },
            buttons: [
                {
                    text: 'Save',
                    handler: 'onSaveButtonClick' // Add a handler to save the form data
                },
                {
                    text: 'Cancel',
                    handler: function (button) {
                        button.up('window').close(); // Close the window when 'Cancel' is clicked
                    }
                }
            ]
        }).show();
    },

    onSaveButtonClick: function () {
        var formPanel = this.lookupReference('movieForm');
        console.log(formPanel); // Check if formPanel is not null
    
        var titleField = formPanel.down('[name=title]');
        var descriptionField = formPanel.down('[name=description]');
        var priceField = formPanel.down('[name=price]');
        var categoryField = formPanel.down('[name=category]');
        var transactionDateField = formPanel.down('[name=transactionDate]');
    
        console.log(titleField, descriptionField, priceField, categoryField, transactionDateField);
    
        if (titleField && descriptionField && priceField && categoryField && transactionDateField) {
            var values = {
                title: titleField.getValue(),
                description: descriptionField.getValue(),
                price: priceField.getValue(),
                category: categoryField.getValue(),
                transactionDate: transactionDateField.getValue()
            };
    
            console.log(values);
    
            var viewModel = this.getViewModel();
            var store = viewModel.getStore('movies'); // Replace 'movies' with the actual name of your store
    
            var record = formPanel.getRecord();
    
            console.log(formPanel, values, record);
    
            if (!record) {
                // Create a new record and add it to the store
                record = Ext.create('YourModel', values); // Replace 'YourModel' with the actual name of your model
                store.add(record);
            } else {
                // Update the existing record with new values
                record.set(values);
            }
    
            formPanel.hide();
        } else {
            console.error('One or more form fields are null.');
        }
    },
});
