const reservacionCtrl = {};

const Reservacion = require("../../models/Reservacion");

const validarFecha = require("../../middleware/validarFechas");

reservacionCtrl.SaveDate = (req, res) => {
    const {
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
    } = req.body;
    const numHabitaciones = validarFecha(
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite
    );

    res.json({ numHabitaciones })
};

reservacionCtrl.SaveRoomsAmount = (req, res) => {};

module.exports = reservacionCtrl;