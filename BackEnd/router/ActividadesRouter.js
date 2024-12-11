const express = require('express');
const router = express.Router();
const { 
    getActividades, 
    getActividadById, 
    crearActividad, 
    modificarActividad, 
    eliminarActividad 
} = require('../controller/ActividadesController');

// Ruta para obtener todas las actividades
router.get('/', getActividades);

// Ruta para obtener una actividad por su id
router.get('/:id', getActividadById);

// Ruta para crear una nueva actividad
router.post('/', crearActividad);

// Ruta para modificar una actividad existente
router.put('/:id', modificarActividad);

// Ruta para eliminar una actividad
router.delete('/:id', eliminarActividad);

module.exports = router;
