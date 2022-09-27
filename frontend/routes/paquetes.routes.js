const router = require ('express').Router();
const path = require('path');

//listar paquete /paquete
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/listarPaquete.html'));
})

// crear paquete --> /paquete/create
router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/crearPaquete.html'));
})

// editar paquete --> /paquete/update/:codigo
router.get('/update/:codigo', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/editarPaquete.html'));
})

module.exports = router;