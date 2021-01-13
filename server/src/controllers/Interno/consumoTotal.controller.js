const consumoTotalCtrl = {};

const Habitacion = require('../../models/Habitacion');
const ConsumoTotal = require('../../models/ConsumoTotal');

consumoTotalCtrl.getConsumptionTotal = async(req, res) => {
    const room = await Habitacion.findOne({ "noCuarto": req.params.noRoom });
    const consumptionTotal = await ConsumoTotal.find({ "idHabitacion": room._id }, { "_id": 0 });
    res.status(200).send(consumptionTotal);
}

consumoTotalCtrl.saveConsumptionTotal = async(req, res) => {
    const {
        precio,
        fecha,
        noTarjetas,
    } = req.body;

    const room = await Habitacion.findOne({ "noCuarto": req.params.noRoom });

    const newSaveConsumptionTotal = new ConsumoTotal({
        precio,
        fecha,
        noTarjetas,
        idHabitacion: room._id
    });

    await newSaveConsumptionTotal.save();
}

module.exports = consumoTotalCtrl;