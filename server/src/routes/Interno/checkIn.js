const { Router } = require('express');
const router = Router();

const {
    saveClient,
    getClientAndRental,
    getClient,
    getRental
} = require('../../controllers/Interno/checkIn.controller');

router.route('/')
    .post(saveClient)

router.route('/alberca/clientes')
    .get(getClient)

router.route('/alberca/alquileres')
    .get(getRental)

router.route('/:noRoom')
    .get(getClientAndRental)

module.exports = router;