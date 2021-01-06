const { Router } = require('express');
const router = Router();

const { 
    getHabitacion, 
    saveHabitacion 
} = require('../../controllers/Interno/habitacion.controller');

router.route('/')
    .get(getHabitacion)
    .post(saveHabitacion)

module.exports = router;