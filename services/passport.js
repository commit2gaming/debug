const passport = require ('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

console.log('1')

passport.serializeUser((user,done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		})
})

passport.use(
	new GoogleStrategy({
		clientID: keys.googleClientID,
		clientSecret: keys.googleClientSecret,
		callbackURL: "http://localhost:5000/auth/google/callback"
	},
		((accessToken, refreshToken, profile, done) => {
			User.findOne({ googleId: profile.id })
				.then(user => {
					if (user) {
						// Already have a record
						done(null, user);
						console.log('User already exists');
					} else {
						// Create new user
						new User({ googleId: profile.id })
							.save()
							.then(user => done(null, user));
					}
				})
		})
	)
);


