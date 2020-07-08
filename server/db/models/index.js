const db = require('../db');
const Business = require('./business');
const Comment = require('./comment');
const User = require('./user');

Business.belongsTo(User);
User.hasMany(Business);

Comment.belongsTo(User);
Business.hasMany(Comment);

module.exports = {
  db,
  Business,
  Comment,
  User
};
