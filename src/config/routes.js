const articlesController = require('../controllers/articles-controller');
const authorsController = require('../controllers/authors-controller');

function router(app) {
    app.get('/', (req, res) => {
        res.render('home/index');
    });
    
    app.get('/articles/create', articlesController.getCreate);
    app.post('/articles/create', articlesController.postCreate);
    
    app.get('/articles', articlesController.index);

    app.get('/authors', authorsController.index);
}

module.exports = router;