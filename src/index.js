const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const config = require('./config/config');
const router = require('./config/routes');
const app = express();
const db = require('./config/database');

db(config);

app.engine('hbs', handlebars({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'hbs');

app.use(express.static('./public'));

router(app);

app.listen(config.port,
    () => console.log(`Listening on port ${config.port}...`));