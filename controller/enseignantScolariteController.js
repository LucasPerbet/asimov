const scolariteModel = require('../model/enseignantScolariteModel');

const scolariteController = {

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

};




module.exports = scolariteController;