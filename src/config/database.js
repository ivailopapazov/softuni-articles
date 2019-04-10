const mongoose = require('mongoose');

function database(config) {
    mongoose.connect(config.dbRoute, {
        useNewUrlParser: true
    });

    const db = mongoose.connection;
    db.on('error', () => console.log('Cannot connect to database!!!'));
    db.once('open', () => console.log('Db Connected'));
}

module.exports = database;