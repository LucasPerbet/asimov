const secretariatModel = require('../model/secretariatModel');

const secretariatController = {
    // Fonction qui affiche la liste des élèves
    async renderListeEleve(req, res) {
        try {
            // Récupérer la liste des élèves
            const eleves = await secretariatModel.getEleves();
            const role = req.session.role;
            res.render('scolariteSecretariat', { eleves, role });
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement de la liste des élèves.");
        }
    },

    // Fonction qui affiche le formulaire de saisie des notes
    async renderFormulaireSaisieNotes(req, res) {
        try {
            const id_utilisateur = req.params.id;
            const role = req.session.role;
            res.render('saisirNotes', { id_utilisateur, role });
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
            res.redirect('/scolarite',{role});
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors de l'enregistrement des notes.");
        }
    }
};

module.exports = secretariatController;
