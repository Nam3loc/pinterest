const Pin = require("../../models/pin");

module.exports = {
  index,
  deletePin,
  update,
  create,
  edit,
  show
};

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// INDEX
async function index(req, res) {
    try {
      const allPins = await Pin.find({});
      res.status(200).render('pins/Index', { pins: allPins });
    } catch (err) {
      res.status(400).send(err);
    }
};

// DELETE

async function deletePin(req, res) {
    try {
      await Pin.findByIdAndDelete(req.params.id);
      res.redirect('/pins');
    } catch (err) {
      res.status(400).send(err);
    }
};

// UPDATE

async function update(req, res) {
    try {
        const updatedPin = await Pin.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).redirect(`/pins/${res.params.id}`)
    } catch (err) {
        res.status(400).send(err)
    }
};

// CREATE

async function create(req, res) {
    try{
        const createPin = await Pin.create(req.body);
        res.status(200).redirect('/pins')
    } catch(err) {
        res.status(400).send(err)
    }
};

// EDIT

async function edit(req, res) {
    try {
        const foundPin = await Pin.findById(req.params.id);
        res.status(200).render('pins/Edit', {pin: foundPin})
    }catch (err) {
        res.status(400).send({ msg: err.message })
    }
};

// SHOW

async function show(req, res) {
    try {
        const foundPin = await Pin.findById(req.params.id);
        res.status(200).render('pins/Show', {pin: foundPin})
    } catch(err) {
        res.status(400).send(err)
    }
};