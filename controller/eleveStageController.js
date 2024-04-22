const stageModel = require('../model/eleveStageModel');


const stageController = {

    // Fonction qui affiche la vue de la scolarite
    async renderStage(req, res) {
        res.render('stageEleve');
    },

}



module.exports = stageController;