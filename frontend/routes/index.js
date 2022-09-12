const router = require('express').Router();

const path = require('path');

const camionerosRouter = require('./camioneros.routes')

router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})

router.use('/camioneros',camionerosRouter)

module.exports = router;
