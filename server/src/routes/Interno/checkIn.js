const { Router } = require('express');
const router = Router();

const { saveClient } = require('../../controllers/Interno/checkIn.controller');

router.route('/')
    .post(saveClient)

module.exports = router;

