const User = require('../model/userScheme');
const bcrypt = require('bcrypt');

//Affiche le formulaire d'inscription
exports.showRegistrationForm = (req, res) => {
    res.render('register', { error: null });
}