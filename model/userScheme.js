const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// methode pour comparer les mot de passes
userScheme.methods.comparePassword = async function (candidatePassword) {
    try {
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }
}
// modele qui porte la cle userScheme
module.exports = mongoose.model('User', userScheme);
