const loginModel = require('../model/loginModel');
const eleveModel = require('../model/eleveModel');
const secretariatModel = require('../model/secretariatModel');

async function login(req, res) {
    const { id, password } = req.body;
    try {
        const utilisateur = await loginModel.getUtilisateurByLogin(id, password);
        if (utilisateur) {
            res.status(200).json(utilisateur);
        } else {
            res.status(404).json({ message: "Utilisateur non trouvé" });
        }
    } catch (error) {
        console.error("Erreur lors de la connexion :", error);
        res.status(500).json({ message: "Erreur lors de la connexion" });
    }
}

async function listEleve(req, res) {
    try {
        // Récupérer la liste des élèves
        const eleves = await secretariatModel.getEleves();

        if(eleves) {
            res.status(200).json({eleves});  
        } else {
            res.status(404).json({ message: "Données non trouvées" });
        }


    } catch (error) {
        console.error(error);
        res.status(500).send("Une erreur s'est produite lors du chargement de la liste des élèves.");
    }
}

async function noteEleve(req, res) {
    try {
        const userId = req.params.id;
        // Utiliser l'ID de l'utilisateur pour récupérer les informations de scolarité
        const scolarite = await eleveModel.getScolariteByUserId(userId);
        res.status(200).json({scolarite});  
    } catch (error) {
        console.error(error);
        res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
    }
}

module.exports = {
    login,
    listEleve,
    noteEleve
};
