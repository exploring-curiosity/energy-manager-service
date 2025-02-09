const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/energy', require('./routes/energyRoutes'));
app.use('/api/appliances', require('./routes/applianceRoutes'));
app.use('/api/floors', require('./routes/floorRoutes'));
app.use('/api/rooms', require('./routes/roomRoutes'));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));