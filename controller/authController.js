const User = require('../model/userScheme');
const bcrypt = require('bcrypt');

// Affiche le formulaire d'inscription
exports.showregistrationForm = (req, res) => {
    res.render('register', { error: null });
}