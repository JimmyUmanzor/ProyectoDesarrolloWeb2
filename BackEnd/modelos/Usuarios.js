const { DataTypes } = require('sequelize');
const sequelize = require('../bd/database');

const Usuarios = sequelize.define('Usuarios', {
    idUsuario: { type: DataTypes.STRING(20), primaryKey: true },
    clave: { type: DataTypes.STRING(20), allowNull: false },
    tipoUsuario: { type: DataTypes.STRING(10), allowNull: false }
},
{
    tableName: 'usuarios',
    timestamps: false,
    freezeTableName: true
});

module.exports = Usuarios;
