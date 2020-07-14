const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const app = express();
const PORT = 3001;
const db = require('../db');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
app.use(passport.initialize());
app.use(passport.session());
// app.use('/api/businesses', require('./businesses'));
// app.use('/api/comments', require('./comments'));
// app.use('/api/users', require('./users'));
app.use('/auth', require('../auth'));
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
