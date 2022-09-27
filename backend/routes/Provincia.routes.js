const router = require('express').Router()
const { Camion, Camionero, HojadeRuta, Paquete, Provincia} = require('../database/models')

router.get("/:id", (req, res) => {
    Provincia.findByPk(req.params.codigo,{}).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Provincia.findAll({
        attributes: ['codigo','nombre'],
        include: [{
            model: Camion,
            attributes: ['matricula']
        },{
            model: Camionero,
            attributes: ['dni'],
        }]
    }).then(list => {
        res.json(list)
    })
})
router.post("/create", (req, res) => {
    Provincia.create({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
    }).then(Provincia => {
        res.json(Provincia)
    })
})
/*               NUEVO              */
router.put('/update/:codigo', (req, res) => {
    console.log(req.body)
    Provincia.update({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
    }, {
        where: {
            codigo: req.params.codigo
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:codigo', (req, res) => {
    Provincia.destroy({
        where: {
            codigo: req.params.codigo
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})
/*               /NUEVO              */
module.exports = router