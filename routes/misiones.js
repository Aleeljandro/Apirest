const express = require('express');
const router = express.Router();
const misionesController = require('../controllers/misionesController');

// Definir las rutas
router.get('/', misionesController.getMisiones);
router.post('/', misionesController.createMision);

// Exportar las rutas
module.exports = router;
