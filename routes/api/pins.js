const express = require('express');
const router = express.Router();
const pinsControllers = require('../../controllers/api/pins');

// GET /api/pins
router.get('/', pinsControllers.index);
// GET /api/pins/new
// router.get('/pins/new', pinsControllers.newPin);
// DELETE /api/pins/:id
router.delete('/:id', pinsControllers.deletePin);
// PUT /api/pins/:id
// router.put('/pins/:id', pinsControllers.update);
// POST /api/pins
router.post('/', pinsControllers.create);
// GET /api/pins/:id/edit
router.get('/:id/edit', pinsControllers.edit);
// GET /api/pins/:id
router.get('/:id', pinsControllers.show);

module.exports = router;