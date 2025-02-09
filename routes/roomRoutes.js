const express = require('express');
const {
  createRoom,
  getRoomsByFloor,
  updateRoom,
  deleteRoom,
} = require('../controllers/roomController');

const router = express.Router();

// Create a new room
router.post('/', createRoom);

// Get all rooms for a floor
router.get('/floor/:floorId', getRoomsByFloor);

// Update a room
router.put('/:id', updateRoom);

// Delete a room
router.delete('/:id', deleteRoom);

module.exports = router;