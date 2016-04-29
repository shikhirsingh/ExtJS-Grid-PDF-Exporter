/**
 * Created by shikhir on 4/19/16.
 */
Ext.define('GridExportPdf.view.main.StockGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'stocksgrid',

    requires: [
        'Ext.grid.plugin.Exporter',
        'Ext.util.Format',
        'GridExportPdf.exporter.PdfExporter',
        'GridExportPdf.store.NyseStocks'
    ],

    title: 'NYSE Stocks',

    store: {
        type: 'NyseStocks'
    },
    loadMask: true,

    columns: [
        { text: 'Symbol',  dataIndex: 'Symbol' },
        { text: 'Company', dataIndex: 'Name', flex: 2 },
        { text: 'Price', dataIndex: 'LastSale', renderer: Ext.util.Format.usMoney},

        { text: 'MarketCap', dataIndex: 'MarketCap', flex: 1,
            renderer  : function(value) {
                return Ext.util.Format.number(value, '0,0');
            }
        },

        { text: 'Sector', dataIndex: 'Sector', flex: 1 },
        { text: 'Industry', dataIndex: 'Industry', flex: 1 }

    ],

    header: {
        itemPosition: 1, // after title before collapse tool
        items: [{
            ui: 'default-toolbar',
            id: "exportBtn",
            xtype: 'button',
            text: 'Export to PDF',
            handler: 'exportToExcel'
        }]
    },

    plugins: [{
        ptype: 'gridpdfexporter'
    }]
});
