const checkInCtrl = {};

const Cliente = require('../../models/Cliente');
const Alquiler = require('../../models/Alquiler');

//-------------------------CHECKIN------------------------------------
//Find all client
checkInCtrl.getClient = async (req, res) => {
    const client = await Cliente.find();
    const rental = await Alquiler.find();
    res.json({client, rental});
}

//Data save client
checkInCtrl.saveClient = async (req, res) => {
    const { nombre, telefono, correo } = req.body;
    const newSaveClient = new Cliente({
        nombre,
        telefono,
        correo
    });
    await newSaveClient.save();
    res.json({ message: 'Client saved' });
}

//Find a client with Id
checkInCtrl.getClientId = async (req, res) => {
    const client = await Cliente.findById(req.params.id);
    res.json(client);
}

//Delete client with Id
checkInCtrl.deleteClient = async (req, res) => {
    await Cliente.findByIdAndDelete(req.params.id);
    res.send("Client deleted")
}
//--------------------------------------------------------------------

module.exports = checkInCtrl;