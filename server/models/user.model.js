var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    password: String,
    permissions: {
        type: String, 
        default: 'default'
    },
    games: [{type: mongoose.Schema.Types.ObjectId, ref: 'Game'}]
});

module.exports = mongoose.model('User', userSchema);