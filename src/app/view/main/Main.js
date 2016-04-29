/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GridExportPdf.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.container.Container',
        'Ext.grid.Panel',
        'Ext.layout.container.Fit',
        'Ext.window.MessageBox',
        'Ext.window.Toast',
        'Ext.plugin.Viewport',
        'GridExportPdf.view.main.MainController',
        'GridExportPdf.view.main.MainModel',
        'GridExportPdf.view.main.StockGrid'
    ],

    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'fit'
    },
    //title: 'Ext JS PDF Exporter Demo',
    items: [
        {
            xtype: 'stocksgrid'
        }
    ]

});
