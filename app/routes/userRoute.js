const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
//Middlewares pour vérifier si l'utilisateur est connecté
const { ensureAuthenticator } = require('../middlewares/authMiddleware');

//Route pour afficher la vue du compte utilisateur
router.get('/home', ensureAuthenticator, userController.showAccount);


module.exports = router;