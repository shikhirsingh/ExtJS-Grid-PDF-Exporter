/**
 * This exporter produces PDF files for the supplied data.
 */
Ext.define('GridExportPdf.exporter.Pdf', {
    extend: 'Ext.exporter.Base',

    alias: 'exporter.pdf',

    fileName: 'export.pdf',

    getContent: function () {
        var config = this.getConfig(),
            data = config.data,
            tData = [],
            dataRowLength = data.groups[0].rows.length;

        for (var k = 0; k < data.columns.length; k++) {
            data.columns[k] = {style: 'tableHeader', text: data.columns[k].text};
        }
        tData.push(data.columns);

        for (var i = 0; i < dataRowLength; i++) {
            var columnLength = data.groups[0].rows[i].length;
            for (var j = 0; j < columnLength; j++) {
                data.groups[0].rows[i][j] = data.groups[0].rows[i][j].toString();
            }
            tData.push(data.groups[0].rows[i]);
        }

        return {
            content: [{
                style: 'tableExample',
                table: {
                    body: tData
                }
            }],
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
        };
    },

    saveAs: function () {
        pdfMake.createPdf(this.getContent()).download(this.getFileName());
    }

});