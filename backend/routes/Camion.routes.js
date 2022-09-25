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
        potencia: req.body.potencia
    }).then(camion => {
        res.json(camion)
    })
})
/*               NUEVO              */
router.put('/update/:id', (req, res) => {
    Camion.update({
        matricula: req.body.matricula,
        modelo: req.body.modelo,
        tipo: req.body.tipo,
        potencia: req.body.potencia
    }, {
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:id', (req, res) => {
    Camion.destroy({
        where: {
            id: req.params.id
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})
/*               /NUEVO              */
module.exports = router