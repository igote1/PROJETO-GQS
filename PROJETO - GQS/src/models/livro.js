const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const Livro = sequelize.define('Livro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = { Livro };
