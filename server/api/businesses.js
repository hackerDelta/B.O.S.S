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

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const business = await Business.findByPk(id, {
      include: [
        { model: Comment, include: { model: User } },
        { model: User, as: 'owner' }
      ]
    });

    res.send(business);
    // res.status(200).json(business);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
