const db = require('../db');
const Business = require('./business');
const Comment = require('./comment');

Business.hasMany(Comment);
Comment.belongsTo(Business);

module.exports = {
  db,
  Business,
  Comment
};
