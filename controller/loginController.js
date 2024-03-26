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

                // Récupérer l'id du rôle de l'utilisateur
                console.log(utilisateur)
             
                // On render la vue en fonction du role, et transmet les parametres que l'on souhaite
                res.render('accueil', { nom: utilisateur.nom, prenom: utilisateur.prenom,  role: utilisateur.libelle_role}); 
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
