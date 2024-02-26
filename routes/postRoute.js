// const express = require('express');
const router = express.Router();
//TODO: creer ensureAuthenticator dans Midlewares
const { ensureAuthenticator } = require('../middlewares/authMiddleware');

// Page d'acceuil
router.get('/', ensureAuthenticator, (req, res) => {
    res.render('acceuil');
});

// TODO: les autres routes a prévoir

module.exports = router;