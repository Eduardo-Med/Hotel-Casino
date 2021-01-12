const consumoServCtrl = {};

const ConsumoServicio = require('../../models/ConsumoServicio');
const Habitacion = require('../../models/Habitacion');

//---------------------------------consumption of service-------------------------------------
//Find the consumption with number room
consumoServCtrl.getconsumption = async(req, res) => {
    const room = await Habitacion.find({ "noCuarto": req.params.noRoom }, { "_id": 1 });
    const consumption = await ConsumoServicio.find({ "idHabitacion": room }, { "_id": 0 });
    res.status(200).send(consumption)
}

consumoServCtrl.saveConsumption = async(req, res) => {
    const {
        nombreServicio,
        precio,
        detalles,
        fecha,
    } = req.body;
    const room = await Habitacion.findOne({ "noCuarto": req.params.noRoom });
    const consumption = new ConsumoServicio({
        nombreServicio,
        precio,
        detalles,
        fecha,
        idHabitacion: room._id
    });
    await consumption.save();
    res.status(200).json({ message: 'Consumption of client saved' });
}

module.exports = consumoServCtrl;