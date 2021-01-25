
const Reservacion = require('../models/Reservacion');

const caducarReservacion = {}

caducarReservacion.caducar = async () => {
    await Reservacion.ensureIndex({ "fechaSalida": 1 }, { expireAfterSeconds: 0 })
}

module.exports = caducarReservacion

