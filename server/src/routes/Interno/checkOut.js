const { Router } = require('express');
const router = Router();

const {
    getClientAndRental,
    deleteRental
} = require('../../controllers/Interno/checkout.controller');


router.route('/:noRoom')
    .get(getClientAndRental)
    .delete(deleteRental)

module.exports = router;