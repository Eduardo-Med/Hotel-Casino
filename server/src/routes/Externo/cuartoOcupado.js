const { Router } = require('express');
const router = Router();

const { getRoomOccupied } = require('../../controllers/Externo/cuartoOcupado.controller');

router.route('/:noRoom')
    .get(getRoomOccupied)

module.exports = router;