
const router = require ('express').Router();
const path = require('path');

// Listar paquetes --> /paquetes
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/listarPaquetes.html'));
})

// Crear paquetes --> /paquetes/create

router.get('/create', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/crearPaquete.html'));
})

// Editar paquetes --> /paquetes/update/:codigo
router.get('/update/:codigoPaquete', (req, res) => {
    res.sendFile(path.resolve('./views/paquetes/editarPaquete.html'));
})
module.exports = router;