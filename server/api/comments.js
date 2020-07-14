const router = require('express').Router();
const { Op } = require('sequelize');
const { Business, Comment, User } = require('../db/models');

router.post('/', async (req, res, next) => {
  try {
    const createdComment = await Comment.create(req.body);

    res.status(200).json(createdComment);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
