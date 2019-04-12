const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const SESSION_MAX_AGE_SECONDS = Number(process.env.SESSION_MAX_AGE_SECONDS) || 60 * 60 * 24 * 7;

module.exports = session({
  // TODO: session configuration; secret, cookie flags (secure, httpOnly, maxAge...) and storage
});
