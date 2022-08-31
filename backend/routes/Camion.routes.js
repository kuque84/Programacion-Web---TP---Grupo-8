const router = require('express').Router()
const { Camion, Camionero, HojadeRuta} = require('../database/models')

router.get("/", (req, res) => {
    Camion.findAll({
        attributes: ['matricula', 'modelo', 'tipo', 'potencia'],
        include: {
            model: HojadeRuta,
            attributes: ['matricula', 'dni'],
            model: Camionero,
            attributes: ['dni', 'nombre', 'direccion', 'telefono', 'salario', 'residencia'],
        }
    }).then(list => {
        res.json(list)
    })
})
router.post("/create", (req, res) => {
    Camion.create({
        matricula: req.body.matricula,
        modelo: req.body.modelo,
        tipo: req.body.tipo,
        potencia: req.body.potencia,
    }).then(camion => {
        res.json(camion)
    })
})

module.exports = router