const loginModel = require('../model/loginModel');

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

module.exports = {
    login
};
