const mongoose = require('mongoose');

const floorSchema = new mongoose.Schema({
  rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }],
  userEmail: { type: String, required: true },
  floorName: { type: String, required: true}
});

module.exports = mongoose.model('Floor', floorSchema);