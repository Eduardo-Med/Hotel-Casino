const { Router } = require('express');
const router = Router();

const {connetionBank} = require('../../controllers/Externo/conexionBanco.controller');

router.route('/')
    .post(connetionBank)

module.exports = router;