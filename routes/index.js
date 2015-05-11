module.exports = function(app, passport)
{
    // INDEX
    // ==============================================

    app.get('/', function(req, res)
    {
        res.render('index', { user: req.user });
    });
}