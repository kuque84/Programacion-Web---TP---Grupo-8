const router = require('express').Router()

const camionRouter = require('./Camion.routes')
const camioneroRouter = require('./Camionero.routes')

router.use('/camiones', camionRouter)
router.use('/camioneros', camioneroRouter)

module.exports = router;
