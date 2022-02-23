const Sequelize = require('sequelize');
const sequelize = new Sequelize('ticket-music', 'root', '', {
  dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;