const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Paquete extends Model {}

Paquete.init({
    codigoPaquete: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    descripcion: DataTypes.STRING,
    direccionDestinatario: DataTypes.STRING,
    destinatario: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'paquete',
    tableName: 'paquetes'
})

module.exports = Paquete