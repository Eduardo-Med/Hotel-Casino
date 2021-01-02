const { Schema, model } = require('mongoose');

const alquilerSchema = new Schema({
    fechaEntrada: {
        type: Date,
        required: true,
    },
    fechaSalida:{
        type: Date,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    idCliente: {
        type: Schema.ObjectId,
        required: true,
        ref: 'Cliente',
    },
    idHabitacion: {
        type: Schema.ObjectId,
        required: true,
        ref: 'Habitacion',
    }
});

module.exports = model('Alquiler', alquilerSchema);