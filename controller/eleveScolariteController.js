const scolariteModel = require('../model/eleveScolariteModel');

const scolariteController = {

    // Fonction qui affiche la vue de la scolarite
    async renderScolarite(req, res) {
        try {
            // Récupérer l'ID de l'utilisateur à partir de la session
            const userId = req.session.userId;

            // Utiliser l'ID de l'utilisateur pour récupérer les informations de scolarité
            //const scolarite = await scolariteModel.getScolariteByUserId(userId);

            res.render('scolariteEleve', { userId });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },
};




module.exports = scolariteController;