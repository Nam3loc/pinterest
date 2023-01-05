const Pin = require("../../models/pin");

module.exports = {
    index,
    //   newPin,
    deletePin,
    //   update,
    create,
    edit,
    show
};

// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show

// INDEX
async function index(req, res) {
    try {
        console.log('i am in index controller');
        const homepage = await Pin.find({});
        console.log(homepage);
        res.status(200).json(homepage);
    } catch (err) {
        res.status(400).send(err);
    }
};

// NEW

// function newPin(req, res) {
//     try {
//         res.render('New');
//     } catch(err) {
//         console.error(err);
//         res.status(500).send('An error occurred');
//     }
// }

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

// async function update(req, res) {
//     try {
//         const updatedPin = await Pin.findByIdAndUpdate(req.params.id, req.body);
//         res.status(200).json(updatedPin)
//     } catch (err) {
//         res.status(400).send(err)
//     }
// };

// CREATE

async function create(req, res) {
    try {
        const createPin = await Pin.create(req.body);
        console.log("create is working in pinCtrl");
        res.status(200).json(createPin)
    } catch (err) {
        console.log("create is not working in pinCtrl");
        res.status(400).send(err)
    }
};

// EDIT

async function edit(req, res) {
    try {
        const foundPin = await Pin.findByIdAndUpdate(req.params.id, req.params.body);
        res.status(200).json(foundPin)
    } catch (err) {
        res.status(400).send({ msg: err.message })
    }
};

// SHOW

async function show(req, res) {
    try {
        const foundPin = await Pin.findById(req.params.id);
        res.status(200).json(foundPin)
    } catch (err) {
        res.status(400).send(err)
    }
};