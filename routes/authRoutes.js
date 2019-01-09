const passport = require ('passport');

module.exports = app => {
	// Passport authentication
	app.get('/auth/google',
		passport.authenticate('google', {
			// What the user is going to share
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', 
		passport.authenticate('google', { failureRedirect: '/login' }),
		function(req, res) {
			// Successful authentication, redirect home.
			res.redirect('/');
	});

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	})

	app.get('/api/current_user', (req, res) => {
		res.send(req.user)
	});
}
