const express = require('express');
const { Business, Comment, User } = require('../db/models');

const app = express();
const PORT = 3001;

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
