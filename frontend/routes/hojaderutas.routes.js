const router = require('express').Router();
const path = require('path');

// Listar hojaderutas --> /hojaderutas
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/hojaderutas/listarHojadeRutas.html'));
})

// Crear hojaderutas --> /hojaderutas/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/hojaderutas/crearHojadeRuta.html'));
})

// Editar hojaderutas --> /hojaderutas/update/:id
router.get('/update/:id', (req, res) => {
    res.sendFile(path.resolve('./views/hojaderutas/editarHojadeRuta.html'));
})

module.exports = router;