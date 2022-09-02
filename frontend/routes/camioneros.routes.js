const router = require('express').Router();
const path = require('path');

// Listar camioneros --> /camioneros
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/camioneros/listarCamioneros.html'));
})

// Crear camioneros --> /camioneros/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/camioneros/crearCamionero.html'));
})

// Editar camioneros --> /camioneros/update/:id
router.get('/update/:dni', (req, res) => {
    res.sendFile(path.resolve('./views/camioneros/editarCamionero.html'));
})

module.exports = router;