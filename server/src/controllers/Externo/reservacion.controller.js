const reservacionCtrl = {};

const Reservacion = require("../../models/Reservacion");

const { validarFecha, cantidadHabitaciones } = require("../../middleware/validarFechas");

reservacionCtrl.SaveDate = async(req, res) => {
    const {
        fechaEntrada,

    } = req.body;
    const numHabitaciones = await validarFecha(
        fechaEntrada
    );

    res.json({ numHabitaciones })
};

reservacionCtrl.SaveDateAndRoomsAmount = async(req, res) => {
    const {
        idReservacion,
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
    } = req.body

    const cantHabitacion = await cantidadHabitaciones(
        idReservacion,
        fechaEntrada,
        fechaSalida,
        noHabSencilla,
        noHabDoble,
        noHabMatrimonial,
        noHabSuite,
    )

    res.json({ cantHabitacion });
};

reservacionCtrl.DeleteReservation = async (req, res) => {

    await Reservacion.deleteOne({ "idReservacion": req.params.idRes });
    
}

module.exports = reservacionCtrl;