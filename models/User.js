const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  floors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Floor' }],
});

module.exports = mongoose.model('User', userSchema);