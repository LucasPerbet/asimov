const express = require('express');
const router = express.Router();
const proviseurController = require('../controller/proviseurController');
const logoutRoute = require('./logoutRoute');

router.get('/scolarite', proviseurController.renderScolarite);
router.get('/projet', proviseurController.renderProjet);
router.post('/validenote', proviseurController.valideNote);
router.post('/modifienote', proviseurController.modifieNote);



router.use(logoutRoute);

module.exports = router;
