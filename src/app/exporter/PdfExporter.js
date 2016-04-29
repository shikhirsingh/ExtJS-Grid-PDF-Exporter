/**
 * Created by shikhir on 4/21/16.
 */
Ext.define('GridExportPdf.exporter.PdfExporter', {
    alias: [
        'plugin.gridpdfexporter'
    ],

    extend: 'Ext.grid.plugin.Exporter',

    requires: [
    ],

    getExporter: function(config){

        return (Ext.apply({
            type: 'pdf',
            data: this.prepareData()
        }, config || {} ));
    },

    saveDocumentAs: function(config){
        var exporter;

        if(this.disabled){
            return;
        }
        exporter = this.getExporter.apply(this, arguments);


        var tData = [];


        for(var k=0; k < exporter.data.columns.length; k++) {
            exporter.data.columns[k]= {style: 'tableHeader', text: exporter.data.columns[k].text};
        }

        tData.push(exporter.data.columns);

        var dataRowLength = exporter.data.groups[0].rows.length;
        for(var i=0; i < dataRowLength; i++){
            var columnLength = exporter.data.groups[0].rows[i].length;
            for(var j=0; j < columnLength; j++){
                exporter.data.groups[0].rows[i][j]=exporter.data.groups[0].rows[i][j].toString();
            }
            tData.push(exporter.data.groups[0].rows[i]);
        }

        var docDefinition = {
            content: [
                {
                    style: 'tableExample',
                    table: {
                        body: tData
                    }
                }
            ],
            styles: {
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            }

        }

        pdfMake.createPdf(docDefinition).download(config.fileName);

        Ext.destroy(exporter);
    }
});