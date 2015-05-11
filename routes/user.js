module.exports = function(app, passport)
{
    // LOGIN
    // ==============================================

    app.get('/login', loggedIn, function(req, res)
    {
        res.render('login', { message: req.flash('error') });
    });

    app.post('/login', passport.authenticate('login',
    {
        successRedirect : '/profile',
        failureRedirect : '/login',
        failureFlash : true
    }));

    // REGISTER
    // ==============================================

    app.get('/register', loggedIn, function(req, res)
    {
        res.render('register', { message: req.flash('error') });
    });

    app.post('/register', passport.authenticate('register',
    {
        successRedirect : '/',
        failureRedirect : '/register',
        failureFlash : true
    }));

    // LOGOUT
    // ==============================================

    app.get('/logout', function(req, res)
    {
        req.logout();
        res.redirect('/');
    });

    // LOGGED IN CHECK
    // ==============================================

    function loggedIn(req, res, next)
    {
        if (!req.isAuthenticated()) return next();
        res.redirect('/');
    }


}