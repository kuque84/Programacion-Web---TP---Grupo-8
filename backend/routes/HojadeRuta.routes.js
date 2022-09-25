const router = require('express').Router()
const { Camion, Camionero, HojadeRuta} = require('../database/models')

router.get("/:id", (req, res) => {
    HojadeRuta.findByPk(req.params.id,{}).then(obj => {
        res.json(obj)
    })
})

router.get("/", (req, res) => {
    HojadeRuta.findAll({
        attributes: ['id','fecha'],
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
    HojadeRuta.create({
        fecha: req.body.fecha,
        matricula: req.body.matricula,
        dni: req.body.dni
    }).then(HojadeRuta => {
        res.json(HojadeRuta)
    })
})
/*               NUEVO              */
router.put('/update/:id', (req, res) => {
    console.log(req.body)
    HojadeRuta.update({
        fecha: req.body.fecha,
        matricula: req.body.matricula,
        dni: req.body.dni
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
    HojadeRuta.destroy({
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