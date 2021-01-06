const { Router } = require('express');
const router = Router();

const { 
    getTipoHabitacion, 
    saveTipoHabitacion 
} = require('../../controllers/Interno/tipoHabitacion.controller');

router.route('/')
    .get(getTipoHabitacion)
    .post(saveTipoHabitacion)

module.exports = router