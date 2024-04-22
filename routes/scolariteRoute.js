const express = require('express');
const router = express.Router();
const eleveScolariteController = require('../controller/eleveScolariteController');


// Route pour afficher le formulaire de connexion
router.get('/scolarite', eleveScolariteController.renderScolarite);

module.exports = router;
