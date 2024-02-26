// import des modules
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const ejs = require('ejs');

// initialisation de l'application
const app = express();

// connexion a MongoDB
mongoose.connect('mongodb://localhost:27017/mongoexpress', {
    // useNewUrlParser: true,
    // UseUnifiedTopology: true
})

// configuration de la session
app.use(session({
    secret: 'user_info', //cle secrete pur crypter les données
    resave: true, // sauvegarder la session a chaque requete
    saveUninitialized: true // on sauvegarde mm si la session est vide
}));

// bodyParser : middleware pour parser les requetes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configuration du passport
app.use(passport.initialize());
app.use(passport.session());

//configuration des routes 
const authRoutes = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const userRoute = require("./routes/userRoute");
const flash = require('express-flash');

app.use('/', authRoutes);
app.use('/posts', postRoute);
app.use('/users', userRoute);

// Configuration du moteur du rendu
app.set('view engine', 'ejs');
app.set('views', "./view");

// ecoute du serveur sur le port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Serveur is running on port http://localhost:$(PORT)');
})

// configuration des messages flash
app.use(flash());