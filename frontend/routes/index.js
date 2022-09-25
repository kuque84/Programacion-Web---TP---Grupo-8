const router = require('express').Router();
const path = require('path');

const camionerosRouter = require('./camioneros.routes')
const camionesRouter = require('./camiones.routes')
const hojadeRutaRouter = require('./hojaderutas.routes')

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

router.use('/camioneros',camionerosRouter)
router.use('/camiones',camionesRouter)
router.use('/hojaderutas',hojadeRutaRouter)

module.exports = router;
