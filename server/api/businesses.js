const express = require('express');
const { Business, Comment, User } = require('../db/models');

const router = express();

router.get('/', async (req, res, next) => {
  try {
    const businesses = await Business.findAll({
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    });

    res.status(200).json(businesses);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
