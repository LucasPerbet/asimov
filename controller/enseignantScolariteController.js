const scolariteModel = require('../model/enseignantScolariteModel');

const enseignantScolariteController = {
    // Fonction qui affiche la vue de la scolarite
    async renderListeEleve(req, res) {
        try {
            // Récupérer l'ID de l'utilisateur à partir de la session
            const userId = req.session.userId;
            // Utiliser l'ID de l'utilisateur pour récupérer les informations de scolarité
            const eleve = await scolariteModel.getEleveByUserId(userId);
            res.render('scolariteEnseignant', { userId, eleve });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    // Fonction pour récupérer les données de scolarité d'un élève
    async getScolariteByIdEleve(req, res) {
        try {
            const eleveId = req.query.id_utilisateur;
            const scolariteData = await scolariteModel.getScolariteByIdEleve(eleveId);
            console.log(scolariteData);
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors de la récupération des données de scolarité.");
        }
    }
};

module.exports = enseignantScolariteController;
