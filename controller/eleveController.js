const eleveModel = require('../model/eleveModel');

const eleveController = {

    // ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC ELEVE SCOLARITE----------------------------------------//

    async renderScolarite(req, res) {
        try {
            // Récupérer l'ID de l'utilisateur à partir de la session
            const userId = req.session.userId;
            const role = req.session.role;

            // Utiliser l'ID de l'utilisateur pour récupérer les informations de scolarité
            const scolarite = await eleveModel.getScolariteByUserId(userId);
            const enseignantReferant = await eleveModel.getIdEnseignantReferent(userId);
            
            res.render('scolariteEleve', { scolarite, userId, enseignantReferant, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    // ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC ELEVE STAGE----------------------------------------//

    async renderStage(req, res) {
        const role = req.session.role;
        // AJOUTER MODEL ET DONNEES EN FONCTION DES BESOINS
        res.render('stageEleve', { role });
    },

    // ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC ELEVE PROJET----------------------------------------//
    async renderProjet(req, res) {
        try {
            const role = req.session.role;
            const projets = await eleveModel.getProjet();
            
            res.render('projetEleve', { role , projets});
        }
        catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement des projets.");
        }
    }

};

module.exports = eleveController;