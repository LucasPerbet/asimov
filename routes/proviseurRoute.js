const express = require('express');
const router = express.Router();
const proviseurController = require('../controller/proviseurController');
const logoutRoute = require('./logoutRoute');

//router.get('/scolarite', proviseurController.renderListeEleve);
router.get('/projet', proviseurController.renderProjet);

router.use(logoutRoute);

module.exports = router;
