const express = require('express');
const router = express.Router();
const pinsControllers = require('../../controllers/api/pins');

// GET /api/pins
router.get('/', pinsControllers.index);
// DELETE /api/pins/:id
router.delete('/:id', pinsControllers.deletePin);
// POST /api/pins
router.post('/', pinsControllers.create);
// GET /api/pins/:id/edit
router.get('/:id/edit', pinsControllers.edit);
// GET /api/pins/:id
router.get('/:id', pinsControllers.show);

module.exports = router;