const { Router } = require('express');
const router = Router();

const {
    saveClient,
    getClientAndRental
} = require('../../controllers/Interno/checkIn.controller');

router.route('/')
    .post(saveClient)

router.route('/:noRoom')
    .get(getClientAndRental)

module.exports = router;