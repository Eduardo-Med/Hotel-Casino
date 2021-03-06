const checkOutCtrl = {};

const Cliente = require('../../models/Cliente');
const Alquiler = require('../../models/Alquiler');
const Habitacion = require('../../models/Habitacion');
const TipoHabitacion = require('../../models/TipoHabitacion');
const CosunsumoServ = require('../../models/ConsumoServicio');
const CosunsumoTotal = require('../../models/ConsumoTotal');
const Reservacion = require('../../models/Reservacion');
const path = require('path');
const pdf = require('html-pdf');
const content = require('../../middleware/facturaCSS')


//-------------------------CHECKOUT------------------------------------
//Find a client and rental with the number by room
checkOutCtrl.getClientAndRental = async(req, res) => {
    const room = await Habitacion.find({ "noCuarto": req.params.noRoom }, { "_id": 1 });
    const rental = await Alquiler.find({ "idHabitacion": room }, { "_id": 0 });
    await Cliente.populate(rental, { path: "idCliente" });
    res.status(200).send(rental);
}

checkOutCtrl.descargarFactura = async(req, res) => {

    const { consumos, informacion, monto, noTarjetas, habitacionNumero } = req.body
    const outFile = path.join(__dirname, '../..', '/public', 'Factura.pdf');
    pdf.create(content(consumos, informacion, monto, noTarjetas,habitacionNumero)).toFile(outFile, function(err, res) {
        if (err) {
            console.log(err);
        }
    });

    const file = path.join(__dirname, '../..', '/public', 'Factura.pdf');
    setTimeout(() => res.sendFile(file), 6500);

}

//Delete Rental
checkOutCtrl.deleteRental = async(req, res) => {

    const habitacion = await Habitacion.findOne({ "noCuarto": req.params.noRoom });

    await CosunsumoTotal.deleteOne({ "idHabitacion": habitacion._id });

    await CosunsumoServ.deleteMany({ "idHabitacion": habitacion._id });

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
    });
    res.status(200).json({ message: "rental deleted" });
}

//--------------------------------------------------------------------

module.exports = checkOutCtrl;