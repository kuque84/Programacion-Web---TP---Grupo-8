const router = require('express').Router();
const path = require('path');

// Listar provincias /provincias
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/listarProvincias.html'));
})

// Crear provincia --> /provincias/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/crearProvincias.html'));
})

// Editar provincias --> /provincias/update/
router.get('/update/:codigo', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/editarProvincias.html'));
})

module.exports = router