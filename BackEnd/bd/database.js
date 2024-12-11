const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Proyectodaw2g3', 'root', 'L0renzana2811@', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
