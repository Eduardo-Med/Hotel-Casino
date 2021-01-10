const checkInCtrl = {};

const moment = require('moment')

const Cliente = require('../../models/Cliente');
const Alquiler = require('../../models/Alquiler');
const Habitacion = require('../../models/Habitacion');
const TipoHabitacion = require('../../models/TipoHabitacion')

const ocuparHabitacion = require('../../middleware/ocuparHabitacion');

//-------------------------CHECKIN------------------------------------
//Find all client
checkInCtrl.getClient = async(req, res) => {
    const client = await Cliente.find();
    const rental = await Alquiler.find();
    res.json({ client, rental });
}

//Data save client and reantal
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

    const habitaciones = await Habitacion.find({}, { "_id": 1 });

    ocuparHabitacion(
        fechaEntrada,
        fechaSalida,
        2,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
        precio,
        cantPersonas,
        newSaveClient._id
    );

    res.status(200).json({ message: 'Client and rental saved' });
}

//Find a client with Id
checkInCtrl.getClientId = async(req, res) => {
    const client = await Cliente.findById(req.params.id);
    res.json(client);
}

//Delete client with Id
checkInCtrl.deleteClient = async(req, res) => {
        await Cliente.findByIdAndDelete(req.params.id);
        res.send("Client deleted")
    }
    //--------------------------------------------------------------------

module.exports = checkInCtrl;