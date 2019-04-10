const Article = require('../models/article');

module.exports = {
    index(req, res) {
        Article.find({})
            .then(function(articles) {
                res.render('articles/index', { articles });
            });

    },

    getCreate(req, res) {
        res.render('articles/create');
    },

    postCreate(req, res) {
        let article = new Article({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        });

        article.save(function(err, dbArticle) {
            res.redirect('/articles');
        });
    }
};