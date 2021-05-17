const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    name: String,
    cards: [{type: Schema.Types.ObjectId, ref: 'Card'}]
});

const Game = mongoose.model('Game', gameSchema);
mongoose.exports = Game;