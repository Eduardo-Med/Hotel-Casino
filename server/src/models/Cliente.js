const { Schema, model } = require('mongoose');

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    idAlquiler: {
        type: Schema.ObjectId,
        required: true,
        ref: 'Alquiler',
    },
    noReservacion: {
        type: Schema.ObjectId,
        required: true,
        ref: 'Reservation'
    }
});

module.exports = model("Cliente", clienteSchema);