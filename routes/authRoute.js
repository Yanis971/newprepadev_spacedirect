// const express = require('express');
const router = express.Router();

// Page de formulaire de connexion 
router.get('/login', (req, res) => {
    res.render('login');
})

// Page de formulaire de création de compte 
router.get('/register', (req, res) => {
    res.render('register');
})

module.exports = router;
