const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    name: String,
}, {timestamps: true });

module.exports = mongoose.model('Name', NameSchema);