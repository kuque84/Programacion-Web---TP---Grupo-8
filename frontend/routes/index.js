const router = require('express').Router();
const path = require('path');

const camionerosRouter = require('./camioneros.routes')
const camoinesRouter = require('./camiones.routes')

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

router.use('/camioneros',camionerosRouter)
router.use('/camiones',camionesRouter)

module.exports = router;
