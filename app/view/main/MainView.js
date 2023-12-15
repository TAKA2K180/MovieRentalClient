Ext.define('irelyTraining.view.main.MainView', {
    extend: 'Ext.panel.Panel',
    xtype: 'main-view',

    viewModel: {
        type: 'main'
    },

    controller: 'main-view',

    layout: 'border',

    items: [
        {
            xtype: 'treepanel',
            title: 'Admin Menu',
            region: 'west',
            width: 200,
            split: true,
            rootVisible: false, // Hide the root node
            collapsible: true, // Make the treepanel collapsible
            collapsed: false, // Initially expanded
            store: {
                type: 'tree',
                root: {
                    expanded: true,
                    children: [
                        { text: 'Movies', iconCls: 'x-fa fa-film', route: 'movies' },
                        { text: 'Customers', iconCls: 'x-fa fa-users', route: 'customers' },
                    ]
                }
            },
            listeners: {
                itemclick: 'onSidebarItemClick' // Handle item click in the ViewController
            }
        },
        {
            xtype: 'container',
            region: 'center',
            reference: 'mainContainer', // Add a reference for easy access in the ViewController
            layout: 'card',
            items: [
                // The default view, you can load other views dynamically
                {
                    xtype: 'admin-movies',
                    routeId: 'movies' // Specify a routeId to easily navigate to this view
                }
            ]
        }
    ],

    listeners: {
        render: 'onMainViewRender' // Handle render event in the ViewController
    }
});
