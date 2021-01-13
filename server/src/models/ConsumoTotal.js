const { Schema, model } = require('mongoose');

const ConsumoTotalSchema = new Schema({
    precio: {
        type: Number,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    noTarjetas: {
        type: Number,
        required: true,
    },
    idHabitacion: {
        type: Schema.ObjectId,
        required: true,
        ref: 'habitaciones',
    },
    // idServicio: {
    //     type: Schema.ObjectId,
    //     required: true,
    //     ref: 'consumoservicios',
    // }
});

module.exports = model('consumototales', ConsumoTotalSchema);