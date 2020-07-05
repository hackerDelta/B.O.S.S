const db = require('../db');
const { Sequelize } = db;

const Comment = db.define('comment', {
  comment: {
    type: Sequelize.TEXT,
    allowNull: false,
    validation: {},
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validation: {
      isEmpty: false,
    },
  },
});

module.exports = Comment;
