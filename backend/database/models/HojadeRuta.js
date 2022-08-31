const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class HojadeRuta extends Model {}

HojadeRuta.init({
    fecha: DataTypes.DATE
}, {
    sequelize,
    modelName: 'hojaderuta',
    tableName: 'hojaderutas'
})

module.exports = HojadeRuta