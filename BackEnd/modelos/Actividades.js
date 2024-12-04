const { DataTypes } = require('sequelize');
const sequelize = require('../bd/database');
const Usuarios = require('./Usuarios');
const Alumnos = require('./Alumnos');

const Actividades = sequelize.define('Actividades', {
    idUsuario: { 
        type: DataTypes.STRING(20), 
        references: { model: Usuarios, key: 'idUsuario' }
    },
    idAlumno: { 
        type: DataTypes.STRING(20), 
        references: { model: Alumnos, key: 'idAlumno' }
    },
    fechaActividad: { type: DataTypes.DATE, allowNull: false },
    descripcion: { type: DataTypes.STRING(1000), allowNull: false },
    tipoActividad: { 
        type: DataTypes.STRING(20), 
        allowNull: false
    },
    },
    {
        tableName: 'actividades',
        timestamps: false,
        freezeTableName: true
    });

module.exports = Actividades;
