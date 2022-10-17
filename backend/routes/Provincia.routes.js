const router = require('express').Router()
const { Camion, Camionero, HojadeRuta, Paquete, Provincia} = require('../database/models')

router.get("/:codigoProvincia", (req, res) => {
    Provincia.findOne({
        where: {
            codigoProvincia: req.params.codigoProvincia,
        }
        }).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    Provincia.findAll({
        attributes: ['codigoProvincia','nombre']/*,
        include: [{
            model: Camion,
            attributes: ['matricula']
        },{
            model: Camionero,
            attributes: ['dni'],
        }]*/
    }).then(list => {
        res.json(list)
    })
})
router.post("/create", (req, res) => {
    Provincia.create({
        codigoProvincia: req.body.codigoProvincia,
        nombre: req.body.nombre,
    }).then(provincia => {
        res.json(provincia)
    })
})

/*               NUEVO              */
router.put('/update/:codigoProvincia', (req, res) => {
    console.log(req.body)
    Provincia.update({
        codigoProvincia: req.body.codigoProvincia,
        nombre: req.body.nombre,
    }, {
        where: {
            codigoProvincia: req.params.codigoProvincia
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

router.delete('/delete/:codigoProvincia', (req, res) => {
    Provincia.destroy({
        where: {
            codigoProvincia: req.params.codigoProvincia
        }
    }).then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})
/*               /NUEVO              */
module.exports = router