const router = require('express').Router()

const camionRouter = require('./Camion.routes')
const camioneroRouter = require('./Camionero.routes')
const hojadeRutaRouter = require ('./HojadeRuta.routes')

router.use('/camiones', camionRouter)
router.use('/camioneros', camioneroRouter)
router.use('/hojadeRuta', hojadeRutaRouter)

module.exports = router;
