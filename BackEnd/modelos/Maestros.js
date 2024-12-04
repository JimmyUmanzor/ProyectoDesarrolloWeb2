const { DataTypes } = require('sequelize');
const sequelize = require('../bd/database');

const Maestros = sequelize.define('Maestros', {
    idMaestro: { type: DataTypes.STRING(20), primaryKey: true },
    nombreMaestro: { type: DataTypes.STRING(50), allowNull: false },
    gradoMaestro: { type: DataTypes.STRING(20), allowNull: false }
},
{
    tableName: 'maestros',
    timestamps: false,
    freezeTableName: true
});

module.exports = Maestros;
