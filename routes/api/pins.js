const express = require('express');
const router = express.Router();
const pinsControllers = require('../../controllers/api/pins');

// GET /api/pins
router.get('/', pinsControllers.index);
// DELETE /api/pins/:id
router.delete('/:id', pinsControllers.deletePin);
// POST /api/pins
router.post('/', pinsControllers.create);
// PUT /api/pins/edit/:id
router.put('/edit/:id', pinsControllers.edit);
// GET /api/pins/:id
router.get('/:id', pinsControllers.show);

module.exports = router;