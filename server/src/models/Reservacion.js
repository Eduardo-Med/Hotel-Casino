const { Schema, model } = require('mongoose');

const reservacionSchema = new Schema({
    fechaEntrada: {
        type: Date,
        required: true,
    },
    fechaSalida: {
        type: Date,
        required: true,
    },
    noHabSencilla: Number,
    noHabDoble: Number,
    noHabMatrimonial: Number,
    noHabSuite: Number
});

module.exports = model('reservaciones', reservacionSchema);