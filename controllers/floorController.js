const Floor = require('../models/Floor');

// Create a new floor
exports.createFloor = async (req, res) => {
  try {
    const { floorName, userEmail } = req.body;
    const floor = new Floor({ floorName, userEmail });
    await floor.save();
    res.status(201).json(floor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all floors for a user
exports.getFloorsByUser = async (req, res) => {
  try {
    const floors = await Floor.find({ userEmail: req.params.userEmail }).populate('rooms');
    res.json(floors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a floor
exports.updateFloor = async (req, res) => {
  try {
    const floor = await Floor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!floor) {
      return res.status(404).json({ message: 'Floor not found' });
    }
    res.json(floor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a floor
exports.deleteFloor = async (req, res) => {
  try {
    const floor = await Floor.findByIdAndDelete(req.params.id);
    if (!floor) {
      return res.status(404).json({ message: 'Floor not found' });
    }
    res.json({ message: 'Floor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};