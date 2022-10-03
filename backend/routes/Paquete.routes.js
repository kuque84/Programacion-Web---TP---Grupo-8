const router = require('express').Router()
const { Camionero, Camion, Paquete, HojadeRuta} = require('../database/models')

router.get("/:codigo", (req, res) => {
    Paquete.findByPk(req.params.codigo).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Paquete.findAll({
        attributes: ['codigoPaquete','descripcion','direccionDestinatario','destinatario'],
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
        }


    ).then(list => {
        res.json(list)
    })
    })
    
router.post("/create", (req, res) => {
    Paquete.create({
        codigoPaquete: req.body.codigoPaquete,
        descripcion: req.body.descripcion,
        direcciondestinatario: req.body.direccionDestinatario,
        dnicamionero: req.body.destinatario,
    
    }).then(paquete => {
        res.json(paquete)
    }).catch(error => {
        res.json(error)
    })
})

router.put('/update/:codigoPaquete', (req, res) => {
    console.log(req.body)
    Paqueteupdate({
        codigo: req.body.codigoPaquete,
        descripcion: req.body.descripcion,
        direcciondestinatario: req.body.direccionDestinatario,
        dnicamionero: req.body.destinatario,
    }, {
        where: {
            codigo: req.params.codigoPaquete
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:codigoPaquete', (req, res) => {
    Paquete.destroy({
        where: {
            codigo: req.params.codigoPaquete
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports= router