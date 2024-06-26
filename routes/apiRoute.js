const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController');


// Route pour gérer la soumission du formulaire de connexion
router.post('/login', apiController.login);
router.get('/liste', apiController.listEleve);
router.get('/note:id',apiController.noteEleve);


module.exports = router;
