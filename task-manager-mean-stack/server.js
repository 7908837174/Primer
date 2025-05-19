const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/task-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✓ MongoDB Connected'))
.catch(err => console.error('× MongoDB Connection Error:', err));

// Routes
const listRoutes = require('./api/routes/list.routes');
app.use('/api/lists', listRoutes);

app.get('/', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`✓ Server running on port ${PORT}`);
});

module.exports = app;
