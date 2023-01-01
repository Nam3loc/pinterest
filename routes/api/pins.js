const express = require('express');
const router = express.Router();
const pinsControllers = require('../../controllers/api/pins');

// GET /api/pins
router.get('/pins', pinsControllers.index);
// DELETE /api/pins/:id
router.delete('/pins/:id', pinsControllers.deletePin);
// PUT /api/pins/:id
router.put('/pins/:id', pinsControllers.update);
// POST /api/pins
router.post('/pins', pinsControllers.create);
// GET /api/pins/:id/edit
router.get('/pins/:id/edit', pinsControllers.edit);
// GET /api/pins/:id
router.get('/pins/:id', pinsControllers.show);

module.exports = router;