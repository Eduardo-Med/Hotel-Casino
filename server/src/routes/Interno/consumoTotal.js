const { Router } = require('express');
const router = Router();

const {
    getConsumptionTotal,
    saveConsumptionTotal
} = require('../../controllers/Interno/consumoTotal.controller');

router.route('/:noRoom')
    .get(getConsumptionTotal)
    .post(saveConsumptionTotal)

module.exports = router;