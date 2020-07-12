const express = require('express');
const { Business, Comment, User } = require('../db/models');

const router = express();

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
