const express = require('express');
const router = express.Router();
const projectorController = require('../controller/projectorController');
router.post('/create-projector-type', projectorController.createProjectorType);
router.get('/projector-types', projectorController.getAllProjectorTypes);
router.get('/projector-types/:id', projectorController.getOneProjectorType);
router.put('/update-projector-type/:id', projectorController.updateProjectorType);
router.delete('/delete-projector-type/:id', projectorController.deleteProjectorType);

module.exports = router;
