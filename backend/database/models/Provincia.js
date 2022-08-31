const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Provincia extends Model {}

Provincia.init({
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING
}, {
    sequelize,
    modelName: 'provincia',
    tableName: 'provincias'
})

module.exports = Provincia