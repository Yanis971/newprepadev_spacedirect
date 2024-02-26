const mongoose = require('mongoose');

// Creation des identitées-classes 
const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
// modele qui porte la cle userScheme
module.exports = mongoose.model('User', userScheme);
