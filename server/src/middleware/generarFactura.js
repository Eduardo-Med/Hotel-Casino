const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

const fs = require('fs');
const path = require('path');

generateInvoice = (data) => {
    //Load the docx file as a binary
    const content = fs.readFileSync(path.resolve('C:/Users/Luis Izaguirre/Desktop/caca/Hotel-Casino/server/src' + '/public', 'factura.docx'), 'binary');

    const zip = new PizZip(content);

    let doc;

    try {
        doc = new Docxtemplater(zip);
    } catch (error) {
        // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
        errorHandler(error);
    }

    //set the templateVariables
    doc.setData(data);

    try {
        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render()
    } catch (error) {
        // Catch rendering errors (errors relating to the rendering of the template : angularParser throws an error)
        errorHandler(error);
    }

    const buf = doc.getZip()
        .generate({ type: 'nodebuffer' });

    // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.resolve('C:/Users/Luis Izaguirre/Desktop/caca/Hotel-Casino/server/src' + '/public', 'FacturaOutput.docx'), buf);
}