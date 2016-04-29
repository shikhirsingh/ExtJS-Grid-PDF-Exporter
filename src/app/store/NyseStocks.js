/**
 * Created by shikhir on 4/19/16.
 */
Ext.define('GridExportPdf.store.NyseStocks', {
    extend: 'Ext.data.Store',
    alias: 'store.NyseStocks',

    requires: [
        'Ext.data.proxy.JsonP',
        'GridExportPdf.model.Stock'
    ],

    storeId: 'NyseStore',

    autoLoad: true,
    model: 'GridExportPdf.model.Stock',

    pageSize: 100,
    recordsParam: "records",
    proxy: {
        type: 'jsonp',
        url: 'http://shikhir.com/stocks/nyse.php',

        reader: {
            type: 'json',
            totalProperty: 'total',
            rootProperty: 'records',
            successProperty: 'success'
        }
    }
});