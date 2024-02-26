const mongoose = require('mongoose');

// Creation des identitées-classes 
const postScheme = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
// modele qui porte la cle userScheme
module.exports = mongoose.model('Post', postScheme);