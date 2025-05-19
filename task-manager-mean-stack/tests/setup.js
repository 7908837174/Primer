const mongoose = require('mongoose');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test-db');
});

afterAll(async () => {
    await mongoose.connection.close();
});