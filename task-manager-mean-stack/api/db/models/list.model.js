const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    title: { type: String, required: true },
    userId: { type: mongoose.Types.ObjectId, required: true }
}, { timestamps: true });

const List = mongoose.model('List', listSchema);
module.exports = { List };
