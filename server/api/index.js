const express = require('express');

const app = express();
const PORT = 3001;

app.use('/api/businesses', require('./businesses'));
app.use('/api/users', require('./users'));

app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
