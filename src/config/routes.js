const articlesController = require('../controllers/articles-controller');

function router(app) {
    app.get('/', (req, res) => {
        res.render('home/index');
    });
    
    app.get('/articles/create', articlesController.getCreate);
    app.post('/articles/create', articlesController.postCreate);
    
    app.get('/articles', articlesController.index);
}

module.exports = router;