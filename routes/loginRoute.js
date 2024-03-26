const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');

// Route pour afficher le formulaire de connexion
router.get('/login', loginController.renderLoginForm);

// Route pour gérer la soumission du formulaire de connexion
router.post('/login', loginController.login);

module.exports = router;
