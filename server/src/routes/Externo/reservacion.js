const { Router } = require('express');
const router = Router();

const { SaveDate, SaveDateAndRoomsAmount, DeleteReservation } = require('../../controllers/Externo/reservacion.controller');

router.route('/validarfecha')
    .post(SaveDate)

router.route('/guardar')
    .post(SaveDateAndRoomsAmount)

router.route('/borrar/:idRes')
    .delete(DeleteReservation)

module.exports = router;