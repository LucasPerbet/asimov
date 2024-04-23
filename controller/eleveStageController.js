const stageModel = require('../model/eleveStageModel');


const stageController = {

    // Fonction qui affiche la vue de la scolarite
    async renderStage(req, res) {
        const role = req.session.role;
        res.render('stageEleve', {role});
    },

}



module.exports = stageController;