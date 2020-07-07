const db = require('../db');
const Business = require('./business');
const Comment = require('./comment');
const User = require('./user');

Business.belongsTo(User);
User.hasMany(Business);

User.belongsToMany(Business, { through: Comment });
Business.belongsToMany(User, { through: Comment });

module.exports = {
  db,
  Business,
  Comment,
  User
};
