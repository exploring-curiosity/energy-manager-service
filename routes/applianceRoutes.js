const express = require('express');
const {
  createAppliance,
  getAppliancesByRoom,
  updateAppliance,
  deleteAppliance,
} = require('../controllers/applianceController');

const router = express.Router();

// Create a new appliance
router.post('/', createAppliance);

// Get all appliances for a room
router.get('/room/:roomId', getAppliancesByRoom);

// Update an appliance
router.put('/:id', updateAppliance);

// Delete an appliance
router.delete('/:id', deleteAppliance);

module.exports = router;