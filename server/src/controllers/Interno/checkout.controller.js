const checkOutCtrl = {};

const Cliente = require('../../models/Cliente');
const Alquiler = require('../../models/Alquiler');
const Habitacion = require('../../models/Habitacion');
const TipoHabitacion = require('../../models/TipoHabitacion');
const path = require('path');
const pdf = require('html-pdf');
const content = require('../../middleware/facturaCSS')

var docxConverter = require('docx-pdf');


//-------------------------CHECKOUT------------------------------------
//Find a client and rental with the number by room
checkOutCtrl.getClientAndRental = async(req, res) => {
    const room = await Habitacion.find({ "noCuarto": req.params.noRoom }, { "_id": 1 });
    const rental = await Alquiler.find({ "idHabitacion": room }, { "_id": 0 });
    await Cliente.populate(rental, { path: "idCliente" });
    res.status(200).send(rental);
}

checkOutCtrl.descargarFactura = async(req, res) => {


    const extFile = path.join(__dirname, '../..', '/public', 'Factura.docx');
    const outFile = path.join(__dirname, '../..', '/public', 'Factura.pdf');
    // pdf.create(content()).toFile(outFile, function(err, res) {
    //     if (err){
    //         console.log(err);
    //     } else {
    //         console.log(res);
    //     }
    // });
    
    docxConverter(extFile,outFile,function(err,result){
        if (err) console.log(err);
        else console.log(result); // writes to file for us
      });
    
    const file = path.join(__dirname, '../..', '/public', 'Factura.pdf');
    setTimeout(()=>res.sendFile(file), 4000);
    
}

//Delete Rental
checkOutCtrl.deleteRental = async(req, res) => {
    const habitacion = await Habitacion.findOne({ "noCuarto": req.params.noRoom })

    await Alquiler.deleteOne({ "idHabitacion": habitacion._id });

    await Habitacion.replaceOne({
        "_id": habitacion._id
    }, {
        "noCamas": habitacion.noCamas,
        "disponible": true,
        "noCuarto": habitacion.noCuarto,
        "idTipo": habitacion.idTipo
    });

    const tiposHabitaciones = await TipoHabitacion.findById(habitacion.idTipo);

    await TipoHabitacion.replaceOne({
        "_id": habitacion.idTipo
    }, {
        "nombre": tiposHabitaciones.nombre,
        "cantidad": (tiposHabitaciones.cantidad + 1)
    })
    res.status(200).json({ message: "rental deleted" })
}

//--------------------------------------------------------------------

module.exports = checkOutCtrl;