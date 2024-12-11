const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Proyectodaw2g3', 'root', 'sscu2017', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = sequelize;
