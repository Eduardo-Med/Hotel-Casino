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

        ref: 'Alquiler',
    },
    noReservacion: {
        type: Schema.ObjectId,

        ref: 'Reservation'
    }
});

module.exports = model("Cliente", clienteSchema);