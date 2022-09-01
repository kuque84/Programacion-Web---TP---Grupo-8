/*  ORIGINAL    */
const router = require('express').Router();
const path = require('path');
/*  /ORIGINAL    */

/*      EDIT        */
/*      /EDIT        */

/*  ORIGINAL    */
const clientesRouter = require('./clientes.routes')
const productosRouter = require('./productos.routes')
/*  /ORIGINAL    */

/*      EDIT        */
const camionerosRouter = require('./camioneros.routes')
/*      /EDIT        */

/*  ORIGINAL    */
router.get('/', (req, res) => {
    res.sendFile(path.resolve('./views/index.html'));
})
/*  /ORIGINAL    */

/*      EDIT        */

/*      /EDIT        */

/*  ORIGINAL    */
router.use('/clients', clientesRouter)
router.use('/products', productosRouter)
/*  /ORIGINAL    */
/*      EDIT        */
router.use('/camioneros',camionerosRouter)
/*      /EDIT        */

/*  ORIGINAL    */
module.exports = router;
/*  /ORIGINAL    */