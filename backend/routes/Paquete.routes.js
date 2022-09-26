const router = require('express').Router()
const { Camionero, Camion, Paquete, HojadeRuta} = require('../database/models')

router.get("/:codigo", (req, res) => {
    Paquete.findByPk(req.params.codigo).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Paquete.findAll({
        attributes: ['codigo','descripcion','direcciondestinatario','dnicamionero','codigo_provincia'],
        include: [{
            model: Camion,
            attributes: ['matricula']
        },{
            model: Camionero,
            attributes: ['dni'],
        },{
            model: HojadeRuta,
            attributes: ['id']
        }]
    }).then(list => {
        res.json(list)
    })
})

router.post("/create", (req, res) => {
    Paquete.create({
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        direcciondestinatario: req.body.direcciondestinatario,
        dnicamionero: req.body.dnicamionero,
        codigo_provincia: req.body.codigo_provincia,
    
    }).then(paquete => {
        res.json(paquete)
    }).catch(error => {
        res.json(error)
    })
})

router.put('/update/:codigo', (req, res) => {
    console.log(req.body)
    Paqueteupdate({
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        direcciondestinatario: req.body.direcciondestinatario,
        dnicamionero: req.body.dnicamionero,
        codigo_provincia: req.body.codigo_provincia
    }, {
        where: {
            codigo: req.params.dni
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:codigo', (req, res) => {
    Paquete.destroy({
        where: {
            codigo: req.params.codigo
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = router;