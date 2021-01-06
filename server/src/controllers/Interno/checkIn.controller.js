const checkInCtrl = {};

const Cliente = require('../../models/Cliente');

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