const { Router } = require('express');
const router = Router();

const {
    getClientAndRental,
    deleteRental,
    descargarFactura
} = require('../../controllers/Interno/checkout.controller');


router.route('/:noRoom')
    .get(getClientAndRental)
    .delete(deleteRental)

router.route('/download/factura')
    .post(descargarFactura)

module.exports = router;