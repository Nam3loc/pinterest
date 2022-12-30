const express = require("express");
const router = express.Router();
const Pin = require("../models/pins");

module.exports = {
  index,
  deletePin,
  updatePin,
  create,
  edit,
  show
};

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// INDEX
router.get('/', (req, res) => {
    Pin.find({}, (err, allPins) => {
        if(!err) {
            res.status(200).render('pins/Index', {
                pins: allPins
            })
        } else {
            res.status(400).send(err)
        }
    })
}) 

// NEW
router.get('/new', (req, res) => {
    res.render('pins/New')
})

// DELETE
router.delete('/:id', (req, res) => {
    Pin.findByIdAndDelete(req.params.id, (err, data) => {
        res.redirect('/pins')
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Pin.findByIdAndUpdate(req.params.params.id, req.body, (err, updatedPin) => {
        if(!err) {
            res.status(200).redirect(`/pins/${res.params.id}`)
        } else {
            res.status(400).send(err)
        }
    })
})

// CREATE
router.post('/', (req, res) => {
    Pin.create(req.body, (err, createdFruit) => {
        if(!err) {
            res.status(200).redirect('/pins')
        } else {
            res.status(400).send(err)
        }
    })
})

// EDIT
router.get('/:id/edit', (req, res) => {
    Pin.findById(req.params.id, (err, foundPin) => {
        if(!err) {
            res.status(200).render('pins/Edit', {pin: foundPin})
        } else {
            res.status(400).send({ msg: err.message })
        }
    })
})

// SHOW
router.get('/:id', (req, res) => {
    Pin.findById(req.params.id, (err, foundPin) => {
        if(!err) {
            res.status(200).render('pins/Show', {
                pin: foundPin
            })
        } else {
            res.status(400).send(err)
        }
    })
})

module.exports = router;