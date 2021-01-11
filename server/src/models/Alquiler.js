const { Schema, model } = require('mongoose');

const alquilerSchema = new Schema({
    fechaEntrada: {
        type: Date,
        required: true,
    },
    fechaSalida: {
        type: Date,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
        default: 0
    },
    cantPersonas: {
        type: Number,
        required: true,
    },
    idCliente: {
        type: Schema.ObjectId,
        required: true,
        ref: 'clientes',
    },
    idHabitacion: {
        type: Schema.ObjectId,
        required: true,
        ref: 'habitaciones',
    }
});

module.exports = model('alquileres', alquilerSchema);