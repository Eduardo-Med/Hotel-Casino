const Reservacion = require('../models/Reservacion');
const TipoHabitacion = require('../models/TipoHabitacion');

const {caducar} = require('../middleware/caducarReservacion');

const registrar = {}

registrar.validarFecha = async(fechaEntrada) => {
    let totalHabitacionesSencillas = 0
    let totalHabitacionesDobles = 0
    let totalHabitacionesMatrimonial = 0
    let totalHabitacionesSuit = 0
    const fechados = new Date(fechaEntrada);
    // const newSaveDate = new Reservacion({ fechaEntrada, fechaSalida, noHabSencilla, noHabDoble, noHabMatrimonial, noHabSuite });
    // await newSaveDate.save();

    const reservacion = await Reservacion.find();
    const tipoHabitacion = await TipoHabitacion.find({}, { 'cantidad': 1, '_id': 0 });



    if (!reservacion.length) {
        // const newSaveDate = new Reservacion({ fechaEntrada, fechaSalida });
        // await newSaveDate.save();
        //returnar la cantidad de habitaciones
        return ([{
            numSencilla: (tipoHabitacion[0].cantidad),
            numDobles: (tipoHabitacion[1].cantidad),
            numMatrimoniales: (tipoHabitacion[2].cantidad),
            numSuit: (tipoHabitacion[3].cantidad)
        }])
    } else {
        reservacion.map((rev, index) => {
                if (fechados.getTime() > rev.fechaSalida.getTime()) {
                    if (rev.noHabSencilla !== 0) {
                        totalHabitacionesSencillas = totalHabitacionesSencillas + rev.noHabSencilla;
                    } 
                    if (rev.noHabDoble !== 0) {
                        totalHabitacionesDobles = totalHabitacionesDobles + rev.noHabDoble;
                    } 
                    if (rev.noHabMatrimonial !== 0) {
                        totalHabitacionesMatrimonial = totalHabitacionesMatrimonial + rev.noHabMatrimonial;
                    } 
                    if (rev.noHabSuite !== 0) {
                        totalHabitacionesSuit = totalHabitacionesSuit + rev.noHabSuite;
                    }
                }
            })
    }

    return [{
        numSencilla: (tipoHabitacion[0].cantidad + totalHabitacionesSencillas),
        numDobles: (tipoHabitacion[1].cantidad + totalHabitacionesDobles),
        numMatrimoniales: (tipoHabitacion[2].cantidad + totalHabitacionesMatrimonial),
        numSuit: (tipoHabitacion[3].cantidad + totalHabitacionesSuit)
    }]


}

registrar.cantidadHabitaciones = async(fechaEntrada, fechaSalida, noHabSencilla, noHabDoble, noHabMatrimonial, noHabSuite) => {

    const newSaveDate = new Reservacion({
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite
    });
    await newSaveDate.save();

    const tipoHabitacion = await TipoHabitacion.find({}, { 'cantidad': 1, '_id': 0 });

    await TipoHabitacion.replaceOne({ "_id": '5ff53f7ef922680e0c313ee9' }, {
        'cantidad': (tipoHabitacion[0].cantidad - noHabSencilla),
        'nombre': "Sencilla"
    });

    await TipoHabitacion.replaceOne({ "_id": '5ff53f88f922680e0c313eea' }, {
        'cantidad': (tipoHabitacion[1].cantidad - noHabDoble),
        'nombre': "Doble"
    });

    await TipoHabitacion.replaceOne({ "_id": '5ff53f8ff922680e0c313eeb' }, {
        'cantidad': (tipoHabitacion[2].cantidad - noHabMatrimonial),
        'nombre': "Matrimonial"
    });

    await TipoHabitacion.replaceOne({ "_id": '5ff53f97f922680e0c313eec' }, {
        'cantidad': (tipoHabitacion[3].cantidad - noHabSuite),
        'nombre': "Suite"
    });

    // const tipoHabitacion2 = await TipoHabitacion.find({}, { 'cantidad': 1, '_id': 0 });

    const tipoHabitacionCambiado = await TipoHabitacion.find({}, { 'cantidad': 1, '_id': 0 });

    return tipoHabitacionCambiado

}

module.exports = registrar