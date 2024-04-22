const express = require('express');
const router = express.Router();
const eleveStageController = require('../controller/eleveStageController');


// Route pour afficher le formulaire de connexion
router.get('/stage', eleveStageController.renderStage);

module.exports = router;
