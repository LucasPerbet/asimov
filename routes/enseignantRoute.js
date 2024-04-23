const express = require('express');
const router = express.Router();
const enseignantController = require('../controller/enseignantController');
const logoutRoute = require('./logoutRoute');

router.get('/scolarite',enseignantController.renderListeEleve);

router.get('/scolarite/:idEleve', async (req, res, next) => {
    const idEleve = req.params.idEleve;
    try {
        // Appeler le contrôleur pour récupérer les informations de scolarité de l'élève en passant l'id de l'élève
        await enseignantController.getScolariteByIdEleve(req, res, next, idEleve);
    } catch (error) {
        console.error("Erreur lors de la récupération des informations de scolarité de l'élève :", error);
        res.status(500).send("Une erreur s'est produite lors de la récupération des informations de scolarité de l'élève.");
    }
});


router.use(logoutRoute);

module.exports = router;
