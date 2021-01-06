const tipoHabitacionCtrl = {};

const TipoHabitacion = require('../../models/TipoHabitacion');

//Find all type room
tipoHabitacionCtrl.getTipoHabitacion = async (req, res) => {
    const tipohabitacion = await TipoHabitacion.find();
    res.json(tipohabitacion);
}

//Data save type room
tipoHabitacionCtrl.saveTipoHabitacion = async (req, res) => {
    const { nombre, cantidad } = req.body;
    const newTipoHabitacion = new TipoHabitacion({
        nombre, 
        cantidad
    });
    await newTipoHabitacion.save();
    res.status(200).json({ message: 'type room saved' });
}

module.exports = tipoHabitacionCtrl;