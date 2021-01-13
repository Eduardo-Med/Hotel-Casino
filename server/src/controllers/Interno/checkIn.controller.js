const checkInCtrl = {};

const Cliente = require('../../models/Cliente');
const Alquiler = require('../../models/Alquiler');
const Habitacion = require('../../models/Habitacion');
const TipoHabitacion = require('../../models/TipoHabitacion');

const ocuparHabitacion = require('../../middleware/ocuparHabitacion');

//-------------------------CHECKIN------------------------------------
//Find a client and rental with the number by room
checkInCtrl.getClientAndRental = async(req, res) => {
    const room = await Habitacion.find({ "noCuarto": req.params.noRoom }, { "_id": 1 });
    const rental = await Alquiler.find({ "idHabitacion": room }, { "_id": 0 });
    await Cliente.populate(rental, { path: "idCliente" });
    res.status(200).send(rental);
}

checkInCtrl.getClient = async(req, res) => {
    const client = await Cliente.find();
    res.status(200).send(client);
}

checkInCtrl.getRental = async(req, res) => {
    const rental = await Alquiler.find();
    res.status(200).send(rental)
}

//Data save client and rental
checkInCtrl.saveClient = async(req, res) => {
    
    const {
        nombre,
        telefono,
        correo,
        noReservacion,
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
        precio,
        cantPersonas,
    } = req.body;

    const newSaveClient = new Cliente({
        nombre,
        telefono,
        correo,
        noReservacion,
    });

    await newSaveClient.save();


        ocuparHabitacion(
            fechaEntrada,
            fechaSalida,
            noHabSencilla,
            noHabDoble,
            noHabMatrimonial,
            noHabSuite,
            precio,
            cantPersonas,
            newSaveClient._id
        );
        res.status(200).json({ message: 'Client and rental saved' });   
}

//--------------------------------------------------------------------

module.exports = checkInCtrl;