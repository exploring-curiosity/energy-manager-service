const Appliance = require('../models/Appliance');

// Create a new appliance
exports.createAppliance = async (req, res) => {
  try {
    const { diodeId, applianceName, category, energyConsumed, roomId, floorId } = req.body;
    const appliance = new Appliance({ diodeId, applianceName, category, energyConsumed, roomId, floorId });
    await appliance.save();
    res.status(201).json(appliance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all appliances for a room
exports.getAppliancesByRoom = async (req, res) => {
  try {
    const appliances = await Appliance.find({ roomId: req.params.roomId });
    res.json(appliances);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an appliance
exports.updateAppliance = async (req, res) => {
  try {
    const appliance = await Appliance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!appliance) {
      return res.status(404).json({ message: 'Appliance not found' });
    }
    res.json(appliance);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an appliance
exports.deleteAppliance = async (req, res) => {
  try {
    const appliance = await Appliance.findByIdAndDelete(req.params.id);
    if (!appliance) {
      return res.status(404).json({ message: 'Appliance not found' });
    }
    res.json({ message: 'Appliance deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};