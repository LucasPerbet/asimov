const express = require('express');
const router = express.Router();
const eleveStageController = require('../controller/eleveStageController');
const logoutRoute = require('./logoutRoute');

// Route pour afficher le formulaire de connexion
router.get('/stage', (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    } else {
        next(); // Passe à la fonction suivante si l'utilisateur est connecté
    }
}, eleveStageController.renderStage);

// Inclure la route de déconnexion
router.use(logoutRoute);

module.exports = router;
