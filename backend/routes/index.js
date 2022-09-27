const router = require('express').Router()

const camionRouter = require('./Camion.routes')
const camioneroRouter = require('./Camionero.routes')
//const hojadeRutaRouter = require ('./HojadeRuta.routes')
const paqueteRouter = require ('./Paquete.routes')

router.use('/camiones', camionRouter)
router.use('/camioneros', camioneroRouter)
//router.use('/hojadeRutas', hojadeRutaRouter)
router.use('/paquetes', paqueteRouter)

module.exports = router;
