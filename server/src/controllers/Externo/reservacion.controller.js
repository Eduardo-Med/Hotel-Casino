const reservacionCtrl = {};

const Reservacion = require("../../models/Reservacion");

const {validarFecha,cantidadHabitaciones} = require("../../middleware/validarFechas");

reservacionCtrl.SaveDate = async (req, res) => {
    const {
        fechaEntrada,

    } = req.body;
    const numHabitaciones = await validarFecha(
        fechaEntrada
    );

    res.send({ numHabitaciones })
};

reservacionCtrl.SaveDateAndRoomsAmount = async (req, res) => {
    const {
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
    } = req.body

    const cantHabitacion = await cantidadHabitaciones(
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
    )

    res.json({cantHabitacion});
};

module.exports = reservacionCtrl;