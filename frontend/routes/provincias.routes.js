const router = require('express').Router();
const path = require('path');

// Listar provincias /provincias
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/listarProvincias.html'));
})

// Crear provincia --> /provincias/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/crearProvincia.html'));
})

// Editar provincias --> /provincias/update/
router.get('/update/:codigoProvincia', (req, res) => {
    res.sendFile(path.resolve('./views/provincias/editarProvincia.html'));
})

module.exports = router