const express = require('express');
const router = express.Router();

const {
  getAllClients,
  getClient,
  createClient,
  deleteClient,
} = require('../controllers/clientsController');

router.get('/', getAllClients);
router.get('/:id', getClient);
router.post('/', createClient);
router.delete('/:id', deleteClient);

module.exports = router;
