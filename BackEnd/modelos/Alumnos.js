const { DataTypes } = require('sequelize');
const sequelize = require('../bd/database');
const Usuarios = require('./Usuarios');

const Alumnos = sequelize.define('Alumnos', {
    idUsuario: { 
        type: DataTypes.STRING(20), 
        references: { model: Usuarios, key: 'idUsuario' }
    },
    idAlumno: { type: DataTypes.STRING(20), primaryKey: true },
    nombreAlumno: { type: DataTypes.STRING(50), allowNull: false },
    gradoAlumno: { type: DataTypes.STRING(20), allowNull: false },
    seccionAlumno: { type: DataTypes.STRING(10), allowNull: false }
},
{
    tableName: 'alumnos',
    timestamps: false,
    freezeTableName: true
});

module.exports = Alumnos;
