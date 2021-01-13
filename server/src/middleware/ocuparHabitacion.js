const Habitacion = require('../models/Habitacion');
const Alquiler = require('../models/Alquiler');
const TipoHabitacion = require('../models/TipoHabitacion');

// Method with params for run the method "ejecutar"
const ocuparHabitacion = async(
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
        precio,
        cantPersonas,
        idCliente
    ) => {
        await ejecutar(
            fechaEntrada,
            fechaSalida,
            precio,
            cantPersonas,
            noHabSencilla,
            '5ff53f7ef922680e0c313ee9',
            idCliente);
        await ejecutar(
            fechaEntrada,
            fechaSalida,
            precio,
            cantPersonas,
            noHabDoble,
            '5ff53f88f922680e0c313eea',
            idCliente);
        await ejecutar(
            fechaEntrada,
            fechaSalida,
            precio,
            cantPersonas,
            noHabMatrimonial,
            '5ff53f8ff922680e0c313eeb',
            idCliente);
        await ejecutar(
            fechaEntrada,
            fechaSalida,
            precio,
            cantPersonas,
            noHabSuite,
            '5ff53f97f922680e0c313eec',
            idCliente);
    }
    //----------------------------------------------------------------------------

//Method for run all params the rental fot save it, and save the id by client
//and the different rooms that it rental
const ejecutar = async(
    fechaEntrada,
    fechaSalida,
    precio,
    cantPersonas,
    tipoHabitacion,
    tipo,
    idCliente
) => {
    if (tipoHabitacion !== 0) {
        const tiposHabitaciones = await TipoHabitacion.findById(tipo);
        if (tiposHabitaciones.cantidad !== 0) {
            const habitaciones = await Habitacion.find({
                "idTipo": tipo,
                "disponible": true,
            }, {
                "noCamas": 1,
                "disponible": 1,
                "noCuarto": 1,
                "idTipo": 1
            });

            for (let i = 0; i < tipoHabitacion; i++) {
                const newSaveRental = new Alquiler({
                    fechaEntrada,
                    fechaSalida,
                    precio,
                    cantPersonas,
                    idCliente: idCliente,
                    idHabitacion: habitaciones[i]._id
                });
                await newSaveRental.save();

                await Habitacion.replaceOne({
                    "_id": habitaciones[i]._id
                }, {
                    "noCamas": habitaciones[i].noCamas,
                    "disponible": false,
                    "noCuarto": habitaciones[i].noCuarto,
                    "idTipo": habitaciones[i].idTipo
                });

                // const tiposHabitaciones = await TipoHabitacion.findById(tipo);

                await TipoHabitacion.replaceOne({
                    "_id": tipo
                }, {
                    "nombre": tiposHabitaciones.nombre,
                    "cantidad": (tiposHabitaciones.cantidad - 1)
                })
            }
        }
    }
}

module.exports = ocuparHabitacion, ejecutar;