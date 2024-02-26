module.exports = {

    // historiquement:  ensureAuthenticator: function (req, res, next){}

    ensureAuthenticator: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
}