const { Camion, Camionero, HojadeRuta, Paquete,Provincia } = require('./models')

Camion.belongsToMany(Camionero,{through: HojadeRuta, foreignKey: 'matricula'})
Camionero.belongsToMany(Camion,{through: HojadeRuta, foreignKey: 'dni'})

Camionero.hasMany(Paquete, {foreignKey:'camioneroDNI'})
Paquete.belongsTo(Camionero,{foreignKey:'camioneroDNI'})
/*
Provincia.hasMany(Paquete, {})
Paquete.belongsToMany(Provincia, {})
*/