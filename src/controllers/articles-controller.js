module.exports = {
    getCreate(req, res) {
        res.render('articles/create');
    },

    postCreate(req, res) {
        console.log(req.body);
        res.end();
    }
};