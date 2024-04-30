const secretariatModel = require('../model/secretariatModel');

const secretariatController = {

    // ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC SECRETARIAT SCOLARITE----------------------------------------//
    // Fonction qui affiche la liste des élèves
    async renderListeEleve(req, res) {
        try {
            // Récupérer la liste des élèves
            const eleves = await secretariatModel.getEleves();
            const role = req.session.role;
            const enseignants = await secretariatModel.getEnseignants();
            res.render('scolariteSecretariat', { eleves, role, enseignants });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la liste des élèves.");
        }
    },

    // Fonction qui affiche le formulaire de saisie des notes
    async renderFormulaireSaisieNotes(req, res) {
        try {
            const userId = req.query.id_utilisateur;
            const role = req.session.role;
            res.render('saisirNotes', { userId, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement du formulaire de saisie des notes.");
        }
    },

    // Fonction qui enregistre les notes saisies
    async enregistrerNotes(req, res) {
        try {
            const { id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur } = req.body;
            await secretariatModel.enregistrerNotes(id_classe, numero_semestre, moyenne_semestre, annee_scolaire, id_utilisateur);
            const role = req.session.role;
            const eleves = await secretariatModel.getEleves();
            const enseignants = await secretariatModel.getEnseignants();

            res.render('scolariteSecretariat',{role, eleves, enseignants});
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors de l'enregistrement des notes.");
        }
    },

     // Fonction pour affecter un référent
     async affecterReferent(req, res) {
        try {
            const { id_responsable, id_eleve } = req.body;
            await secretariatModel.affecterReferent(id_responsable, id_eleve);
            res.redirect('/secretariat/scolarite');
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors de l'affectation du référent.");
        }
    }

    // ----------------------------------------------------------------------------------------------//
//---------------------------------- BLOC SECRETARIAT ....----------------------------------------//
};

module.exports = secretariatController;
