const db = require('../db');
const Business = require('./business');
const Comment = require('./comment');
const User = require('./user');

Business.hasOne(User);

User.hasMany(Business, { through: Comment });
Business.hasMany(User, { through: Comment });

module.exports = {
  db,
  Business,
  Comment,
  User
};
