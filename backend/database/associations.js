const { Cliente, Producto, ClienteProducto, Camion, Camionero, HojadeRuta, Paquete,Provincia } = require('./models')

Cliente.belongsToMany(Producto, { through: ClienteProducto, foreignKey: 'clienteDni' })
Producto.belongsToMany(Cliente, { through: ClienteProducto, foreignKey: 'productoId' })

Camion.belongsToMany(Camionero,{through: HojadeRuta, foreignKey: 'matricula'})
Camionero.belongsToMany(Camion,{through: HojadeRuta, foreignKey: 'dni'})

Camionero.hasMany(Paquete)
Paquete.belongsTo(Camionero)