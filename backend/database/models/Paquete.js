const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Paquete extends Model {}

Paquete.init({
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    descripcion: DataTypes.STRING,
    direcciondestinatario: DataTypes.STRING,
    dniCamionero: DataTypes.STRING,
    codigo_provincia: DataTypes.DATE
}, {
    sequelize,
    modelName: 'paquete',
    tableName: 'paquetes'
})

module.exports = Paquete