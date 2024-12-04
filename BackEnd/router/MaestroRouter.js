const express = require('express');
const { getMaestros,
        getMaestroById
    } = require('../controller/MaestrosController');

const router = express.Router();

router.get('/', getMaestros);
router.get('/:id', getMaestroById);

module.exports = router;