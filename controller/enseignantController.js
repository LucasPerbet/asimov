const enseignantModel = require('../model/enseignantModel');



const enseignantController = {
    
// ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC ENSEIGNANT SCOLARITE----------------------------------------//

    async renderListeEleve(req, res) {
        try {
            // Récupérer l'ID de l'utilisateur à partir de la session
            const userId = req.session.userId;
            const role = req.session.role;
            // Utiliser l'ID de l'utilisateur pour récupérer les informations de scolarité
            const eleve = await enseignantModel.getEleveByUserId(userId);
            res.render('scolariteEnseignant', { userId, eleve, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    // Fonction pour récupérer les données de scolarité d'un élève
    async  getScolariteByIdEleve(req, res, next, idEleve) {
        try {
            // Appeler le modèle pour récupérer les informations de scolarité de l'élève
            const scolariteInfo = await enseignantModel.getScolariteByIdEleve(idEleve);
            
            // Vérifier si les informations de scolarité existent pour l'élève
            if (scolariteInfo) {
                // Envoyer les informations de scolarité en tant que réponse
                res.json(scolariteInfo);
            } else {
                // Si aucune information de scolarité n'est trouvée, envoyer un message approprié
                res.status(404).send("Aucune information de scolarité trouvée pour cet élève.");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des informations de scolarité :", error);
            res.status(500).send("Une erreur s'est produite lors de la récupération des données de scolarité.");
        }
    }

    // ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC ENSEIGNANT ....----------------------------------------//


};




module.exports = enseignantController;
