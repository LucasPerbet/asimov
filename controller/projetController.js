const projetController = {
    renderProjet(req, res, next) {
        try {
            const role = req.session.role;

            switch (role) {
                case 1:
                    res.render('projetProviseur',{role});
                    break;
                case 4:
                    res.render('projetEleve',{role});
                    break;
                default:
                    res.status(403).send("Accès interdit.");
            }
        } catch (error) {
            console.error(error);
            res.status(500).send("Une erreur s'est produite lors du chargement des projets.");
        }
    }
};

module.exports = projetController;
