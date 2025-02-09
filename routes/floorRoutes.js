const express = require('express');
const {
  createFloor,
  getFloorsByUser,
  updateFloor,
  deleteFloor,
} = require('../controllers/floorController');

const router = express.Router();

// Create a new floor
router.post('/', createFloor);

// Get all floors for a user
router.get('/user/:userEmail', getFloorsByUser);

// Update a floor
router.put('/:id', updateFloor);

// Delete a floor
router.delete('/:id', deleteFloor);

module.exports = router;