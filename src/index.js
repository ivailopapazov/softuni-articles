const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const config = require('./config/config');
const articlesController = require('./controllers/articles-controller');
const app = express();

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'hbs');

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('home/index');
});

app.get('/articles/create', articlesController.getCreate);

app.post('/articles/create', articlesController.postCreate);

app.get('/articles', (req, res) => {
    res.render('articles/index');
})

app.listen(config.port,
    () => console.log(`Listening on port ${config.port}...`));