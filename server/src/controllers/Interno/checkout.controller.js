const checkOutCtrl = {};

const Cliente = require('../../models/Cliente');
const Alquiler = require('../../models/Alquiler');
const Habitacion = require('../../models/Habitacion');
const TipoHabitacion = require('../../models/TipoHabitacion');

//-------------------------CHECKOUT------------------------------------
//Find a client and rental with the number by room
checkOutCtrl.getClientAndRental = async(req, res) => {
    const room = await Habitacion.find({ "noCuarto": req.params.noRoom }, { "_id": 1 });
    const rental = await Alquiler.find({ "idHabitacion": room }, { "_id": 0 });
    await Cliente.populate(rental, { path: "idCliente" });
    res.status(200).send(rental);
}

//Delete Rental
checkOutCtrl.deleteRental = async(req, res) => {
    const habitacion = await Habitacion.findOne({ "noCuarto": req.params.noRoom })
    const deleteRental = new Alquiler.find({
        idHabitacion: habitacion._id,
        "disponible": false
    });
    await deleteRental.delete();

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
    res.statu(200).json({ message: "rental deleted" })
}

//--------------------------------------------------------------------

module.exports = checkOutCtrl;