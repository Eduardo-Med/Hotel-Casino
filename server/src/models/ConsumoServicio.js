const { Schema, model } = require('mongoose');

const ConsumoServicioSchema = new Schema({
    nombreServicio: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    detalles: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    idHabitacion: {
        type: Schema.ObjectId,
        required: true,
        ref: 'habitaciones',
    }
});

module.exports = model('consumoservicios', ConsumoServicioSchema);