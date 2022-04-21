const Sequelize = require('sequelize');
const sequelize = new Sequelize('ticket_music', 'root', '', {
  dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;