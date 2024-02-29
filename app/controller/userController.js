const User = require('../model/userScheme');

// methode pour afficher la page du compte
exports.showAccount = async (req, res) => {
    try {
        //on récupère l'id de l'utilisateur connecté
        const userId = req.user._id;
        console.log(userId)

        const userInfos = await Post.find({ author: userId }).sort
    } catch (error) {

    }
}