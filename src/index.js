const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

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

app.get('/articles/create', (req, res) => {
    res.render('articles/create');
});

app.post('/articles/create', (req, res) => {
    console.log(req.body);
});

app.get('/articles', (req, res) => {
    res.render('articles/index');
})

app.listen(3000, () => console.log(`Listening on port 3000...`));