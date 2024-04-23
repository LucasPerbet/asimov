const proviseurModel = require('../model/proviseurModel');

const proviseurController = {

    // ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC PROVISEUR SCOLARITE----------------------------------------//

    // ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC PROVISEUR PROJET----------------------------------------//

    renderProjet(req, res) {
        try {
            const role = req.session.role;
            // AJOUTER MODEL ET DONNEES EN FONCTION DES BESOINS
            res.render('projetProviseur', { role });
        }
        catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement des projets.");
        }
    }
};

module.exports = proviseurController;