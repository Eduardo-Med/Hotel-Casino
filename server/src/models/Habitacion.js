const { Schema, model } = require('mongoose');

const habitacionSchema = new Schema({
    noCamas: {
        type: Number,
        required: true,
    },
    disponible: {
        type: Boolean,
        required: true,
        default: true,
    },
    noCuarto: {
        type: String,
        required: true,
    },
    idTipo: { 
        type: Schema.ObjectId,
        required: true,
        ref: 'tipohabitaciones',
    }
});

module.exports = model('habitaciones', habitacionSchema);