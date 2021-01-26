const router = require('express').Router();
const Client = require('./controllers/clients.controller');
const Provider = require('./controllers/providers.controller');
const Endpoints = require('./controllers/endpoints.controller');

const BASE_PATH = '/api';

router.get(`${BASE_PATH}/clients`, Client.get);
router.get(`${BASE_PATH}/clients/:id`, Client.get);
router.post(`${BASE_PATH}/clients`, Client.create);
router.put(`${BASE_PATH}/clients/:id`, Client.update);
router.delete(`${BASE_PATH}/clients/:id`, Client.delete);

router.get(`${BASE_PATH}/providers`, Provider.get);
router.get(`${BASE_PATH}/providers/:id`, Provider.get);
router.post(`${BASE_PATH}/providers`, Provider.create);
router.put(`${BASE_PATH}/providers/:id`, Provider.update);
router.delete(`${BASE_PATH}/providers/:id`, Provider.delete);

router.get(`${BASE_PATH}/endpoints/:table`, Endpoints.get);
router.get(`${BASE_PATH}/endpoints/:table/:id`, Endpoints.get);
router.post(`${BASE_PATH}/endpoints/:table`, Endpoints.post);
router.put(`${BASE_PATH}/endpoints/:table/:id`, Endpoints.put);
router.delete(`${BASE_PATH}/endpoints/:table/:id`, Endpoints.delete);

module.exports = router;