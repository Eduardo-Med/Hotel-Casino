const { Router } = require('express');
const router = Router();

const {
    getHabitacion,
    saveHabitacion
} = require('../../controllers/Interno/habitacion.controller');

router.route('/')
    .get(getHabitacion)
    .post(saveHabitacion)

router.route('/alberca/habitaciones')
    .get(getHabitacion)

module.exports = router;