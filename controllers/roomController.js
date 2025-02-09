const Room = require('../models/Room');

// Create a new room
exports.createRoom = async (req, res) => {
  try {
    const { roomName, floorId, userEmail } = req.body;
    const room = new Room({ roomName, floorId, userEmail });
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all rooms for a floor
exports.getRoomsByFloor = async (req, res) => {
  try {
    const rooms = await Room.find({ floorId: req.params.floorId });
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a room
exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json(room);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a room
exports.deleteRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }
    res.json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};