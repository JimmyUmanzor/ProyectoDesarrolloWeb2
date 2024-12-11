const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Proyectodaw2g3', 'root', 'l0renzana', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
