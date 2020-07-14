const router = require('express').Router();
const { User } = require('../db/models/user');

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/api/users/:id', async (req, res, next) => {
  try {
    let user = await User.findOne({ where: { id: req.params.id } });
    res.json({ user });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
