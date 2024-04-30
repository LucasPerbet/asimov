const proviseurModel = require('../model/proviseurModel');

const proviseurController = {

    // ----------------------------------------------------------------------------------------------//
    //---------------------------------- BLOC PROVISEUR SCOLARITE----------------------------------------//


    async renderScolarite(req, res) {
        try {
            const role = req.session.role;
    
            // Utiliser la fonction pour récupérer les informations de scolarité de tous les utilisateurs
            const scolarite = await proviseurModel.getAllScolarites();
            console.log(scolarite);
            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    
    async valideNote(req, res) {
        try {
            const { id_scolarite } = req.body;
            await proviseurModel.valideNote(id_scolarite);
            const role = req.session.role;
            // Utiliser la fonction pour récupérer les informations de scolarité de tous les utilisateurs
            const scolarite = await proviseurModel.getAllScolarites();
            
            
            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },

    async modifieNote(req, res) {
        try {
            const { note, id_scolarite } = req.body;
            await proviseurModel.modifieNote(note, id_scolarite);
            
            
            const role = req.session.role;
            // Utiliser la fonction pour récupérer les informations de scolarité de tous les utilisateurs
            const scolarite = await proviseurModel.getAllScolarites();
            
            
            res.render('scolariteProviseur', { scolarite, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la page de la scolarité.");
        }
    },
    

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