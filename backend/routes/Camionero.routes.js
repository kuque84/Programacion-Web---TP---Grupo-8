const router = require('express').Router()
const { Camionero, Camion, Paquete, HojadeRuta} = require('../database/models')

router.get("/:dni", (req, res) => {
    Camionero.findByPk(req.params.dni).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Camionero.findAll({
        attributes: ['dni', 'nombre', 'direccion', 'telefono', 'salario', 'residencia'],
        include: {
            model: Camion,
            attributes: ['matricula'],
            model: HojadeRuta,
            attributes: ['matricula'],
            model: Paquete,
            attributes: ['camioneroDNI'],
        }
    }).then(list => {
        res.json(list)
    })
})

router.post("/create", (req, res) => {
    Camionero.create({
        dni: req.body.dni,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        salario: req.body.salario,
        residencia: req.body.residencia,
    }).then(camionero => {
        res.json(camionero)
    }).catch(error => {
        res.json(error)
    })
})

router.put('/update/:dni', (req, res) => {
    console.log(req.body)
    Camionero.update({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        salario: req.body.salario,
        residencia: req.body.residencia
    }, {
        where: {
            dni: req.params.dni
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:dni', (req, res) => {
    Camionero.destroy({
        where: {
            dni: req.params.dni
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = router;