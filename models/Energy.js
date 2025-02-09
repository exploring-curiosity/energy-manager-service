const mongoose = require('mongoose');

const energySchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  solarGenerated: { type: Number, default: 0 },
  sentToHouse: { type: Number, default: 0 },
  batteryCharged: { type: Number, default: 0 },
  sentToGrid: { type: Number, default: 0 }
});

module.exports = mongoose.model('Energy', energySchema);