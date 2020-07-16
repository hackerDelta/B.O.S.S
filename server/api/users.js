const express = require('express');
const { Business, Comment, User } = require('../db/models');

const router = express();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let user = await User.findOne({ where: { id: req.params.id } });
    res.json({ user });
  } catch (err) {
    next(err);
  }
});

router.get('/:ownerId', async (req, res, next) => {
  try {
    const businessesByOwner = await User.findByPk(req.params.ownerId, {
      include: [
        {
          model: Business,
          where: {
            ownerId: req.params.ownerId
          }
        }
      ]
    });

    res.status(200).json(businessesByOwner);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
