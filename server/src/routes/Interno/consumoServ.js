const { Router } = require('express');
const router = Router();

const {
    getconsumption,
    saveConsumption
} = require('../../controllers/Interno/consumoServ.controller')

router.route('/:noRoom')
    .get(getconsumption)
    .post(saveConsumption)

module.exports = router;