const router = require('express').Router();
const Client = require('./controllers/clients.controller');

const BASE_PATH = '/api';

router.get(`${BASE_PATH}/clients`, Client.get);
router.get(`${BASE_PATH}/clients/:id`, Client.get);
router.post(`${BASE_PATH}/clients`, Client.create);
router.put(`${BASE_PATH}/clients/:id`, Client.update);
router.delete(`${BASE_PATH}/clients/:id`, Client.delete);

module.exports = router;