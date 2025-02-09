const express = require('express');
const {
  createEnergy,
  getEnergyByUser,
  updateEnergy,
  deleteEnergy,
} = require('../controllers/energyController');

const router = express.Router();

// Create a new energy record
router.post('/', createEnergy);

// Get all energy records for a user
router.get('/user/:userEmail', getEnergyByUser);

// Update an energy record
router.put('/:id', updateEnergy);

// Delete an energy record
router.delete('/:id', deleteEnergy);

module.exports = router;