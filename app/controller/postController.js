const Post = require('../model/postScheme');

//méthode pour afficher la page d'accueil
exports.showHome = async (req, res) => {
    try {
        //on récupère l'id de l'utilisateur connecté
        const userId = req.user._id;

        //on récupère tous les posts de l'utilisateur connecté
        const userPosts = await Post.find({ author: userId }).sort({ created_at: 'desc' });

        //on renvois la vue accueil avec les posts de l'utilisateur connecté
        res.render('accueil', { userPosts });

    } catch (error) {
        console.log(error);
    }
};

//méthode pour afficher le formulaire de création de post
exports.showAddPost = (req, res) => {
    res.render('post/add', { error: null });
};

//méthode pour ajouter un post
exports.addPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        //on récupère l'id de l'utilisateur connecté
        const author = req.user._id;

        //on crée l'objet post
        const newPost = new Post({
            title: title,
            content: content,
            author: author,
            created_at: new Date(),
        });

        //on sauvegarde le post
        await newPost.save();

        //on redirige l'utilisateur vers la page d'accueil
        res.redirect('/');
    } catch (error) {
        //on redirige sur le formulaire de création de post avec un message d'erreur
        res.render('post/add', { error: 'Une erreur est survenue, veuillez réessayer.' })
    }
};

//méthode pour afficher le formulaire de modification de post
exports.showEditPost = async (req, res) => {
    try {
        //on récupère l'id du post
        const postId = req.params.id;

        //on récupère les données du post grace à son id
        const post = await Post.findById(postId);

        //on vérifie si l'utilisateur est l'auteur du post
        if (post.author.equals(req.user._id)) {
            //on renvois la vue de modification de post avec les données du post
            res.render('post/edit', { post });
        } else {
            res.redirect('/');
        }
    } catch (error) {
        res.render('post/edit', { error: 'Une erreur est survenue, veuillez réessayer.' });
    }
};

// methode qui met a jour un post
exports.editPost = async (req, res) => {
    try {
        const { title, content } = req.body;

        // on recupere l'id du post
        const postId = req.params.id;

        const post = await Post.findById(postId);

        // on verifie si l'user est l'auteur du post
        if (post.author.equals(req.user._id)) {
            // on met a jour le post
            post.title = title;
            post.content = content;
            post.updated_at = new Date();

            //on sauvegarde le post
            await post.save();

            // on redirige sur l'accueil
            res.redirect('/');
        } else {
            // on redirige sur l'accueil
            res.redirect('/');
        }

    } catch (error) {
        // on retourne le formulaire avec un message d'erreur
        res.render('post/add', { error: 'Une erreur est survenue, veuillez réessayer.' })
    }
};

// methode qui supprime le post
exports.deletePost = async (req, res) => {
    try {
        // on recupere l'id du post
        const postId = req.params.id;
        console.log(postId)
        // on recupere le post a son a id
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).send('Arrete de jouer avec les urls');
        }
        // on verifie si l'user est l'auteur du post
        if (post.author.equals(req.user._id)) {
            // on suprrime le post
            // await post.remove();
            // wait post.deleteOne();
            await post.deleteOne()
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    } catch (error) {

    }
}