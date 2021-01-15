const consumoTotalCtrl = {};
const moment  = require('moment')
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
        noTarjetas,
    } = req.body;

    const now = moment()
    const room = await Habitacion.findOne({ "noCuarto": req.params.noRoom });

    const newSaveConsumptionTotal = new ConsumoTotal({
        precio,
        fecha:now,
        noTarjetas,
        idHabitacion: room._id
    });

    await newSaveConsumptionTotal.save();

    res.status(200).json({"message": "Consumption total of client saved"})
}

module.exports = consumoTotalCtrl;