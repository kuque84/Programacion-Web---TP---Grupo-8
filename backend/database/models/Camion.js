const { Model, DataTypes } = require('sequelize')
const sequelize = require('../sequelize')

class Camion extends Model {}

Camion.init({
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primarKey: true
    },
    modelo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    potencia: DataTypes.STRING
}, {
    sequelize,
    modelName: 'camion',
    tableName: 'camiones'
})

module.exports = Camion