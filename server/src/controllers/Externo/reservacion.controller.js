const reservacionCtrl = {};

const Reservacion = require("../../models/Reservacion");

const validarFecha = require("../../middleware/validarFechas");

reservacionCtrl.SaveDate = (req, res) => {
    const {
        fechaEntrada,

    } = req.body;
    const numHabitaciones = validarFecha(
        fechaEntrada,
    );

    res.json({ numHabitaciones })
};

reservacionCtrl.SaveDateAndRoomsAmount = (req, res) => {
    const {
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
    } = req.body

    const cantHabitacion = cantidadHabitaciones(
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
    )

    res.send(cantHabitacion);
};

module.exports = reservacionCtrl;