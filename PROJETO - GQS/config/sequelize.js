const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('livros_gqs', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  port: 5432,
  logging: false,
});

module.exports = sequelize;

