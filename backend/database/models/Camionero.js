const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Camionero extends Model {}

Camionero.init({
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    salario: DataTypes.FLOAT,
    residencia: DataTypes.STRING
}, {
    sequelize,
    modelName: 'camionero',
    tableName: 'camioneros'
})

module.exports = Camionero