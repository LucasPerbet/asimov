const secretariatModel = require('../model/secretariatModel');

const secretariatController = {

    // Fonction qui affiche la liste des élèves
    async renderListeEleve(req, res) {
        try {
            // Récupérer la liste des élèves
            const eleves = await secretariatModel.getEleves();
            res.render('scolariteSecretariat', { eleves });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la liste des élèves.");
        }
    }
};

module.exports = secretariatController;
