const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController');


// Route pour gérer la soumission du formulaire de connexion
router.post('/login', apiController.login);
router.get('/liste', apiController.listEleve);


module.exports = router;
