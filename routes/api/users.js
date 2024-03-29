const express = require("express")
const router = express.Router()
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post("/", usersCtrl.create)

// POST /api/users/login
router.post("/login", usersCtrl.login)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.get('/:id', ensureLoggedIn, usersCtrl.findUserById);

// PUT /api/users/edit/:id
router.put('/edit/:id', usersCtrl.edit);

// PUT /api/users/edit-profile/:id
router.put('/edit-profile/:id', usersCtrl.edit);

module.exports = router;