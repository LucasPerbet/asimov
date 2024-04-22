const express = require('express');
const router = express.Router();
const projetController = require('../controller/projetController');

// Route pour afficher les projets
router.get('/projet', (req, res, next) => {
    if (!req.session.userId || !req.session.role) {
        res.redirect('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    } else {
        next(); // Passe à la fonction suivante si l'utilisateur est connecté
    }
}, projetController.renderProjet);

module.exports = router;
