const User = require('../model/userScheme');
const bcrypt = require('bcrypt');

//Affiche le formulaire d'inscription
exports.showRegistrationForm = (req, res) => {
    res.render('register', { error: null });
}

// enregistrement de nouvel utilisateur
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // verifier si l'utilsateur existe
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.render('register', { error: 'Cet utilisateur existe déjà' });
        }
        // on verifie si les champs sont bien remplis
        if (name === '' || email === '' || password === '') {
            return res.render('register', { error: 'Tous les champs sont obligatoires' });
        }
        // on encode le mot de passe
        const hasherPassword = await bcrypt.hash(password, 10);

        // on fait l'objet utilisateur
        const newUser = new User({
            name: name,
            email: email,
            password: hasherPassword
        });

        // on sauvegarde l'utilisateur dans la base de donnée
        await newUser.save();

        res.redirect('/login');
    }

    catch (error) {
        console.error(error);
        res.render('register', { error: 'Erreur lors de l\'enregistrement de l\'utilisateur' });
    }

}

// affiche le formulaire de connexion
exports.showRegistrationForm = (req, res) => {
    res.render('login');
}

// connexion a l'utilisateur
exports.loginUser = (req, res) => {

}