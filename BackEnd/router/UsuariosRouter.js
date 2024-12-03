const express = require('express');
const router = express.Router();
const { getUsuarios, 
    getUsuarioById } = require('../controller/UsuariosController');


router.get('/', getUsuarios)
router.get('/:id', getUsuarioById)


module.exports = router