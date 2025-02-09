const express = require('express');
const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Get a user by email
router.get('/:email', getUser);

// Update a user
router.put('/:email', updateUser);

// Delete a user
router.delete('/:email', deleteUser);

module.exports = router;