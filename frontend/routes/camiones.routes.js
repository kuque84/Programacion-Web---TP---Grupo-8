const router = require('express').Router();
const path = require('path');

// Listar camiones --> /camiones
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camiones/listarCamiones.html'));
})

// Crear camiones --> /camiones/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/camiones/crearCamion.html'));
})

// Editar camiones --> /camiones/update/:id
router.get('/update/:matricula', (req, res) => {
    res.sendFile(path.resolve('./views/camiones/editarCamion.html'));
})

module.exports = router;