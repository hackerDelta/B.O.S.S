const db = require('../db');
const { Sequelize } = db;

const Business = db.define('business', {
  isVerified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  address: {
    type: Sequelize.TEXT
  },
  phone: {
    type: Sequelize.STRING
  },
  website: {
    type: Sequelize.STRING
  },
  hours: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type: Sequelize.STRING
  },
  postalCode: {
    type: Sequelize.STRING
  },
  longitude: {
    type: Sequelize.STRING
  },
  latitude: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
});

Business.beforeCreate(async (business) => {
  const regex = /(\d{3})(\d{3})(\d{4})/;
  const found = business.phone.match(regex);

  business.password = business.phone.length
    ? `(${found[1]}) ${found[2]}-${found[3]}`
    : '';
});

module.exports = Business;
