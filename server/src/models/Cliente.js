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
    noReservacion: {
        type: String,
        required: true,
    },
});

module.exports = model("clientes", clienteSchema);