const loginModel = require('../model/loginModel');

const loginController = {

    // Fonction qui affiche la vue du formulaire de connexion
    async renderLoginForm(req, res) {
        res.render('login');
    },

    // Fonction qui effectue l'opération de connexion, et redirige vers la vue en fonction du rôle de l'utilisateur
    async login(req, res) {
        try {
            const { id_utilisateur, mdp } = req.body;
            const utilisateur = await loginModel.getUtilisateurByLogin(id_utilisateur, mdp);
            if (utilisateur) {

                // Stocker l'ID de l'utilisateur dans la session
                req.session.userId = utilisateur.id_utilisateur;
                req.session.role = utilisateur.id_role;

                let vueAccueil;

                switch(utilisateur.id_role) {
                    case 1:
                        vueAccueil = "accueilProviseur";
                    break;

                    case 2:
                        vueAccueil = "accueilEnseignant";
                    break;

                    case 3:
                        vueAccueil = "accueilSecretariat";
                    break;

                    case 4:
                        vueAccueil = "accueilEleve";
                    break;

                    default:
                        console.log("Erreur")
                }
                // On render la vue en fonction du role, et transmet les parametres que l'on souhaite
                res.render(vueAccueil, { nom: utilisateur.nom, prenom: utilisateur.prenom,  role: utilisateur.libelle_role}); 
            } else {
                res.send("Identifiant ou mot de passe incorrect.");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors de la connexion.");
        }
    }
};
module.exports = loginController;
