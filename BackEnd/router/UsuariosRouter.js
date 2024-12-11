const express = require('express');
const router = express.Router();
const { getUsuarios, 
    getUsuarioById } = require('../controller/UsuariosController');


router.get('/', getUsuarios)
router.get('/:idUsuario', getUsuarioById);
router.post('/', getUsuarioById)


module.exports = router