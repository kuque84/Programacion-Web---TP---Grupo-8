<<<<<<< HEAD
const router = require ('express').Router();
const path = require('path');

//listar paquete /paquete
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/listarPaquete.html'));
})

// crear paquete --> /paquete/create
=======
const router = require('express').Router();
const path = require('path');

// Listar paquetes --> /paquetes
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/listarPaquetes.html'));
})

// Crear paquetes --> /paquetes/create
>>>>>>> fb59fe162b94d74dd5526c32543ffaa425e0356b
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/crearPaquete.html'));
})

<<<<<<< HEAD
// editar paquete --> /paquete/update/:codigo
router.get('/update/:codigo', (req, res) => {
=======
// Editar paquetes --> /paquetes/update/:id
router.get('/update/:dni', (req, res) => {
>>>>>>> fb59fe162b94d74dd5526c32543ffaa425e0356b
    res.sendFile(path.resolve('./views/paquetes/editarPaquete.html'));
})

module.exports = router;