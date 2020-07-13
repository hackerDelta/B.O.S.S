const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { Business, Comment, User } = require('../db/models');

const PORT = 3001;

// *****temporary path to user
app.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get('/api/users/:id', async (req, res, next) => {
  try {
    let user = await User.findOne({ where: { id: req.params.id } });
    res.json({ user });
  } catch (err) {
    next(err);
  }
});

app.use(morgan('dev'));
// ************

app.post('/auth/login', async (req, res, next) => {
  try {
    console.log('HEY****', req.body);
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log('No such user found:', req.body.email);
      res.status(401).send('Wrong username and/or password');
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email);
      res.status(401).send('Wrong username and/or password');
    } else {
      req.login(user, (err) => (err ? next(err) : res.json(user)));
    }
  } catch (err) {
    next(err);
  }
});
// *****

app.get('/api/businesses', async (req, res, next) => {
  try {
    const businesses = await Business.findAll({
      include: [{ model: Comment, include: { model: User } }]
    });

    res.status(200).json(businesses);
  } catch (err) {
    console.log(err);
  }
});

const server = app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`)
);
