const Habitacion = require('../models/Habitacion');
const Alquiler = require('../models/Alquiler');
const TipoHabitacion = require('../models/TipoHabitacion');
const ConsumoTotal = require('../models/ConsumoTotal');

//Method for run all params the rental fot save it, and save the id by client
//and the different rooms that it rental
const desocuparHabitacion = async (req, res) => {
    const habitacion = await Habitacion.find({ "noCuarto": req.params.noRoom }, {})
    const deleteRental = new Alquiler.find({
        idHabitacion: habitacion,
        "disponible": false
    });
    await deleteRental.delete();

    await Habitacion.replaceOne({
        "_id": habitaciones._id
    }, {
        "noCamas": habitaciones.noCamas,
        "disponible": true,
        "noCuarto": habitaciones.noCuarto,
        "idTipo": habitaciones.idTipo
    });

    const tiposHabitaciones = await TipoHabitacion.findById(tipo);

    await TipoHabitacion.replaceOne({
        "_id": tipo
    }, {
        "nombre": tiposHabitaciones.nombre,
        "cantidad": (tiposHabitaciones.cantidad + 1)
    })
}

module.exports = desocuparHabitacion, ejecutar;