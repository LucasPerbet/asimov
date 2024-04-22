const scolariteModel = require('../model/eleveScolariteModel');

const scolariteController = {

    // Fonction qui affiche la vue de la scolarite
    async renderScolarite(req, res) {
        res.render('scolariteEleve');
    },

}




module.exports = scolariteController;