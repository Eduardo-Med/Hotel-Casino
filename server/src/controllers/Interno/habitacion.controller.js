const habitacionCtrl = {};

const Habitacion = require('../../models/Habitacion');

//Find all room
habitacionCtrl.getHabitacion = async (req, res) => {
    const habitacion = await Habitacion.find();
    res.json(habitacion);
}

//Data save room
habitacionCtrl.saveHabitacion = async (req, res) => {
    const { 
        noCamas, 
        disponible, 
        noCuarto, 
        idTipo 
    } = req.body;
    const newHabitacion = new Habitacion({
        noCamas, 
        disponible, 
        noCuarto, 
        idTipo 
    });
    await newHabitacion.save();
    res.status(200).json({ message: 'room saved' });
}

module.exports = habitacionCtrl;