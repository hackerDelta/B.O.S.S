const express = require('express');
const { Business, Comment, User } = require('../db/models');
const {
  validateAdmin,
  validateUser,
  validateUserOrAdmin
} = require('../utils/permission');

const router = express();

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.json(users);
  } catch (error) {
    next(error);
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

router.post('/', async (req, res, next) => {
  try {
    const newBusiness = req.body;
    const createdBusiness = await Business.create(newBusiness);

    res.status(201).json(createdBusiness);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  const businessObj = req.body;
  const business = await Business.findByPk(id);

  try {
    if (business) {
      await business.update(businessObj);

      res.status(200).send(business);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const userToRemove = await User.findByPk(id);

    if (userToRemove) {
      const numRows = await userToRemove.destroy();

      if (numRows) {
        res.sendStatus(204);
      }
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
