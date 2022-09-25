const { Camion, Camionero, HojadeRuta, Paquete, Provincia } = require('./models')
/*
Camion.belongsToMany(Camionero,{through: HojadeRuta, foreignKey: 'dni'})
Camionero.belongsToMany(Camion,{through: HojadeRuta, foreignKey: 'matricula'})
*/
Camionero.hasMany(Paquete, {foreignKey:'camioneroDNI'})
Paquete.belongsTo(Camionero,{foreignKey:'camioneroDNI'})
/*
Provincia.hasMany(Paquete, {})
Paquete.belongsToMany(Provincia, {})
*/