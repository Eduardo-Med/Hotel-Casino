const { Router } = require('express');
const router = Router();

const { SaveDate } = require('../../controllers/Externo/reservacion.controller');

router.route('/')
    .post(SaveDate)

module.exports = router;