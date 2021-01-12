const Habitacion = require('../models/Habitacion');
const Alquiler = require('../models/Alquiler');
const TipoHabitacion = require('../models/TipoHabitacion');

//Method for run all params the rental fot save it, and save the id by client
//and the different rooms that it rental
const desocuparHabitacion = async(req, res) => {
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

module.exports = desocuparHabitacion;