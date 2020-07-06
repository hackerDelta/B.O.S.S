const express = require('express');
const Business = require('../db/models/business');
const app = express();
const PORT = 3001;

app.get('/api/businesses', async (req, res, next) => {
  try {
    const businesses = await Business.findAll();
    console.log('here i am');

    res.status(200).json(businesses);
  } catch (err) {
    console.log(err);
  }
});

const server = app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`)
);
