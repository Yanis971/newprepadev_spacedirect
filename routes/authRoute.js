const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

//Page formulaire de connexion
router.get('/login', (req, res) => {
    res.render('login');
})

//Page formulaire de création de compte
router.get('/register', authController.showRegistrationForm);

// route qui receptione les donnés du formulaire d'inscription
router.post('/register', authController.registerUser);

module.exports = router;