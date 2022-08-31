/* ORIGINAL */
const router = require('express').Router()
const clienteRouter = require('./Cliente.routes')
const productoRouter = require('./Producto.routes')
const compraRouter = require('./Compra.routes')
/* /ORIGINAL */

/* EDIT */
const camionRouter = require('./Camion.routes')
/* /EDIT */

/* ORIGINAL */
router.use('/clientes', clienteRouter)
router.use('/productos', productoRouter)
router.use('/compras', compraRouter)
/* /ORIGINAL */

/* EDIT */
router.use('/camiones', camionRouter)
/* /EDIT */

/* ORIGINAL */
module.exports = router;
/* /ORIGINAL */