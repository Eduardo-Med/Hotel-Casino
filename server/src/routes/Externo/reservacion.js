const { Router } = require('express');
const router = Router();

const { SaveDate, SaveDateAndRoomsAmount } = require('../../controllers/Externo/reservacion.controller');

router.route('/validarfecha')
    .post(SaveDate)

router.route('/guardar')
    .post(SaveDateAndRoomsAmount)

module.exports = router;