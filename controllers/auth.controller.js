const mongoose = require('mongoose');
const User = require('../models/user.model');
const passport = require('passport');

module.exports.register = (req, res, next) => {
  res.render('auth/register');
}

module.exports.doRegister = (req, res, next) => {

  function renderWithErrors(errors) {
    res.render('auth/register', {
      user: req.body,
      errors: errors
    })
  }

  User.findOne({ email: req.body.email })
    .then(user => {
      if(user) {
        renderWithErrors({email:'esto existe manco'})
 }
      else{
        user= new User(req.body);
        return user.save()
        .then (user => res.redirect ('/login'))
      }
      // TODO: save user & redirect to login
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        renderWithErrors(error.errors)
      } else {
        next(error);
      }
    });
}

module.exports.login = (req, res, next) => {
  res.render('auth/login');
}

module.exports.doLogin = (req, res, next) => {
  // TODO: passport local-auth authentication & redirect to /profile
}

module.exports.loginWithGoogleCallback = (req, res, next) => {
  // TODO: passport google-auth authentication & redirect to /profile
}

module.exports.profile = (req, res, next) => {
  res.render('auth/profile')
}

module.exports.doProfile = (req, res, next) => {
  // TODO: edit connect user profile, remember password is not a required field and the avatarURL
  // is provided by the storage configuration
}

module.exports.logout = (req, res, next) => {
  // TODO: logout and redirect to login
}
