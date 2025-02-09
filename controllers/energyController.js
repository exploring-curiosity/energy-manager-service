const Energy = require('../models/Energy');

// Create a new energy record
exports.createEnergy = async (req, res) => {
  try {
    const { userEmail, solarGenerated, sentToHouse, batteryCharged, sentToGrid } = req.body;
    const energy = new Energy({ userEmail, solarGenerated, sentToHouse, batteryCharged, sentToGrid });
    await energy.save();
    res.status(201).json(energy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all energy records for a user
exports.getEnergyByUser = async (req, res) => {
  try {
    const energyRecords = await Energy.find({ userEmail: req.params.userEmail });
    res.json(energyRecords);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an energy record
exports.updateEnergy = async (req, res) => {
  try {
    const energy = await Energy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!energy) {
      return res.status(404).json({ message: 'Energy record not found' });
    }
    res.json(energy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an energy record
exports.deleteEnergy = async (req, res) => {
  try {
    const energy = await Energy.findByIdAndDelete(req.params.id);
    if (!energy) {
      return res.status(404).json({ message: 'Energy record not found' });
    }
    res.json({ message: 'Energy record deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};