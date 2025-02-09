const mongoose = require('mongoose');

const applianceSchema = new mongoose.Schema({
  diodeId: { type: String, required: true, unique: true },
  applianceName: { type: String, required: true},
  category: { type: String, enum: ['AC', 'Fan', 'Light', 'Sockets', 'TV', 'Refrigerator', 'Washing Machine', 'Dryer', 'Oven', 'Other'], required: true },
  energyConsumed: { 
    type: [{
      timestamp: { type: Date, default: Date.now },
      energy: { type: Number, default: 0 }
    }],
    default: [] 
  },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  floorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Floor' },
});

module.exports = mongoose.model('Appliance', applianceSchema);