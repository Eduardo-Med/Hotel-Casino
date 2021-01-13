const cuartoOcupadoCtrl = {};

const Habitacion = require('../../models/Habitacion');

cuartoOcupadoCtrl.getRoomOccupied = async(req, res) => {
    const room = await Habitacion.findOne({ "noCuarto": req.params.noRoom });
    if (room.disponible === false) {
        res.status(200).json({ message: `Este cliente es huesped del hotel, de la habitacion ${room.noCuarto}` })
    } else {
        res.status(400).json({ message: "Este cliente no es huesped del hotel" })
    }
}

module.exports = cuartoOcupadoCtrl;