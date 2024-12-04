const express = require('express');
const router = express.Router();
const { getAlumnos, 
    getAlumnoById } = require ('../controller/AlumnosController'); 


router.get('/', getAlumnos)
router.get('/:id', getAlumnoById)

module.exports = router