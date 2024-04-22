const express = require('express');
const router = express.Router();
const eleveScolariteController = require('../controller/eleveScolariteController');
const secretariatController = require('../controller/secretatriatController');
const enseignantController = require('../controller/enseignantScolariteController');
const proviseurController = require('../controller/proviseurController');
const logoutRoute = require('./logoutRoute');

// Route pour afficher le formulaire de connexion
router.get('/scolarite', (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    } else {
        next(); // Passe à la fonction suivante si l'utilisateur est connecté
    }
}, (req, res, next) => {
    const role = req.session.role;
    switch (role) {
        case 4:
            eleveScolariteController.renderScolarite(req, res, next);
            break;
        case 3:
            secretariatController.renderListeEleve(req, res, next);
            break;
        case 2:
            enseignantController.renderListeEleve(req, res, next);
            break;
        /*case 1:
            proviseurController.renderListeEleve(req, res, next);
            break;*/
        // Ajoutez d'autres cas selon vos besoins
        default:
            res.status(403).send("Accès interdit.");
    }
}),

// Route pour récupérer les données de scolarité d'un élève
router.get('/recupererDonneesScolarite', enseignantController.getScolariteByIdEleve);

router.use(logoutRoute);


module.exports = router;
