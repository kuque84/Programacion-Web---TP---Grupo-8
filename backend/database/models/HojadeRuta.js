const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class HojadeRuta extends Model {}

HojadeRuta.init({
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    fecha: DataTypes.DATE
}, {
    sequelize,
    modelName: 'hojaderuta',
    tableName: 'hojaderutas'
})

module.exports = HojadeRuta