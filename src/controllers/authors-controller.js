const Article = require('../models/article');

module.exports = {
    index(req, res) {
        Article
            .find()
            .distinct('author', function(err, data) {
                console.log(data);
            });
    }
};