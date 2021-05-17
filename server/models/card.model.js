const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    type: {type: String, required: true },
    code: {type: String, required: true },
    languages:{type: String, required: true },
    content: {type: String, required: true },
    direction: {type: String, required: true },
});

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;