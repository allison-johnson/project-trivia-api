const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', categorySchema);