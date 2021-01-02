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
        ref: 'Habitacion',
    },
    idServicio: {
        type: Schema.ObjectId,
        required: true,
        ref: 'ConsumoServicio',
    }
});

module.exports = model('ConsumoTotal', ConsumoTotalSchema);