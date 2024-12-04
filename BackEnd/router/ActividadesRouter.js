const express = require('express');
const router = express.Router();
const { getActividades, 
    getActividadById, 
    crearActividad, 
    modificarActividad, 
    eliminarActividad } = require ('../controller/ActividadesController');

router.get('/', getActividades)
router.get('/:id', getActividadById)
router.post('/', crearActividad)
router.put('/:id', modificarActividad)
router.delete('/:id', eliminarActividad)


module.exports = router