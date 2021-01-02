const { Schema, model } = require('mongoose');

const TipoHabitacionSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    Cantidad: {
        type: Number,
        required: true,
        default: 1,
    }
});

module.exports = model('TipoHabitacion', TipoHabitacionSchema);