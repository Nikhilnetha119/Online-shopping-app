const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Asnpn@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
