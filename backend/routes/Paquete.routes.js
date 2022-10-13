const router = require('express').Router()
const { Camionero, Camion, Paquete, HojadeRuta, Provincia} = require('../database/models')

router.get("/:codigoPaquete", (req, res) => {
    Paquete.findOne({
        where: {
            codigoPaquete: req.params.codigoPaquete
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.get("/", (req, res) => {
    Paquete.findAll({
        attributes: ['codigoPaquete','descripcion','direccionDestinatario','destinatario'],
        
        include: [{
            model: Provincia,
            attributes: ['nombre']
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
        direccionDestinatario: req.body.direccionDestinatario,
        destinatario: req.body.destinatario,
    
    }).then(paquete => {
        res.json(paquete)
    }).catch(error => {
        res.json(error)
    })
})

router.put('/update/:codigoPaquete', (req, res) => {
    console.log(req.body)
    Paquete.update({
        codigoPaquete: req.body.codigoPaquete,
        descripcion: req.body.descripcion,
        direccionDestinatario: req.body.direccionDestinatario,
        destinatario: req.body.destinatario,
    }, {
        where: {
            codigoPaquete: req.params.codigoPaquete
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
            codigoPaquete: req.params.codigoPaquete
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports= router