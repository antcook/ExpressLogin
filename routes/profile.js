module.exports = function(app)
{
    // PROFILE
    // ==============================================

    app.get('/profile', function(req, res)
    {
    	if (req.isAuthenticated())
    	{
        	res.render('profile', { user: req.user });
        }
        else
        {
        	res.redirect('/');
        }
    });
}