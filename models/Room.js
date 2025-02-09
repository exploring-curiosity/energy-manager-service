const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomName: { type: String, required: true },
  floorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Floor' },
  userEmail: { type: String, required: true },
});

module.exports = mongoose.model('Room', roomSchema);