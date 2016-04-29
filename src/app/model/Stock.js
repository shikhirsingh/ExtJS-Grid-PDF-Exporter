/**
 * Created by shikhir on 4/19/16.
 */
Ext.define('GridExportPdf.model.Stock', {
    extend: 'Ext.data.Model',

    fields: [

        { name: 'Symbol',     type: 'string' },
        { name: 'Name',      type: 'string' },
        { name: 'LastSale',    type: 'number' },
        { name: 'MarketCap',   type: 'number' },
        { name: 'IPOyear', type: 'string' },
        { name: 'Sector', type: 'string' },
        { name: 'Industry', type: 'string' },
        { name: 'createdAt', type: 'string' },
        { name: 'updatedAt', type: 'string' }
    ]
});