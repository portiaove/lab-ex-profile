const User = require('../models/user.model');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
 
passport.serializeUser((user, next) => {
  next(null, user.id)
  // DONE: write user unique information to cookie
})

passport.deserializeUser((id, next) => {
  User.findById(id)
  .then(user => next(null, user))
  .catch(next)
   // DONE: read user from cookie
})

passport.use('local-auth', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, next) => {
  // TODO: authenticate user using local auth, remember you need find user from and check his password,
  // then call next passing error or authenticated user or validation feedback next(error, user, validations)
}));

/*
passport.use('google-auth', new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL || '/authenticate/google/cb'
}, (accessToken, refreshToken, profile, next) => {
  // TODO: authenticate user using google
}));
*/
