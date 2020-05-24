Ext.define('App.exporter.PdfExporter6', {
    extend: 'Ext.exporter.Base',
    alias: 'exporter.pdf',

    /**Enable zera at grid */
    zebra: true,
    zebraOddColor: '#DDDDDD',
    zebraEvenColor: '#FFFFFF',
    headerColor: '#0277BD',

    getContent: function () {
        var me = this,
            columns = this.getData().getColumns().items,
            rows = this.getData().getRows().items;
        tData = [], tWidths = [];

        for (let k = 0; k < columns.length; k++) {
            const width = columns[k].getWidth();
            tWidths[k] = width > 100 ? '*' : 'auto';
            columns[k] = { style: 'tbHeader', text: columns[k].getText() };
        }
        tData.push(columns);

        for (let i = 0; i < rows.length; i++) {
            let cells = rows[i].getCells().items;
            for (let j = 0; j < cells.length; j++) {
                cells[j] = { style: 'tbBody', text: cells[j].getValue() };
            }
            tData.push(cells);
        }

        return {
            pageSize: 'A4',
            // portrait or landscape
            pageOrientation: 'portrait',
            // [left, top, right, bottom] or [horizontal, vertical]
            pageMargins: [10, 20, 10, 20],
            content: [
                { text: this.getTitle(), style: 'header' },
                {
                    style: 'table',
                    table: {
                        headerRows: 1,
                        widths: tWidths,
                        body: tData
                    },
                    layout: {
                        fillColor: function (i, node) {
                            if (i === 0) {
                                return me.headerColor; //Header
                            } else if (me.zebra) {
                                return (i % 2 === 0) ? me.zebraOddColor : me.zebraEvenColor; // zebra body
                            } else {
                                return null;
                            }
                        }
                    }
                }
            ],
            footer: function (currentPage, pageCount) {
                return {
                    columns: [
                        {
                            text: '',
                            style: 'footer'
                        },
                        {
                            text: 'Pg. ' + currentPage + ' / ' + pageCount,
                            style: 'footer',
                            alignment: 'right',
                        }
                    ]
                };
            },
            styles: {
                header: {
                    fontSize: 12,
                    bold: true,
                    alignment: 'center'
                },
                table: {
                    margin: [10, 10, 10, 10],
                    fontSize: 10
                },
                tbBody: {
                    fontSize: 10
                },
                tbHeader: {
                    bold: true,
                    fontSize: 10,
                    color: 'white',
                    alignment: 'center'
                },
                footer: {
                    fontSize: 8,
                    margin: [10, 0]
                }
            }
        }
    },

    saveAs: function () {
        pdfMake.createPdf(this.getContent()).download(this.getFileName());
        return new Ext.Deferred();
    }
});
