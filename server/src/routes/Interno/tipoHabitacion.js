const { Router } = require('express');
const router = Router();

const {
    getTipoHabitacion,
    saveTipoHabitacion,
    getTipoHabitacionId
} = require('../../controllers/Interno/tipoHabitacion.controller');

router.route('/')
    .get(getTipoHabitacion)
    .post(saveTipoHabitacion)

router.route('/:id')
    .get(getTipoHabitacionId)

module.exports = router