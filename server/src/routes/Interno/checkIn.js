const { Router } = require('express');
const router = Router();

const { 
    saveClient, 
    getClient, 
    deleteClient, 
    getClientId, 
} = require('../../controllers/Interno/checkIn.controller');

router.route('/')
    .get(getClient)
    .post(saveClient)

router.route('/:id')
    .get(getClientId)
    .delete(deleteClient)

module.exports = router;

