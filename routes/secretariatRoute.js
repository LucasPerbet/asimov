const express = require('express');
const router = express.Router();
const secretariatController = require('../controller/secretariatController');
const logoutRoute = require('./logoutRoute');

router.get('/scolarite',secretariatController.renderListeEleve);
router.get('/saisirnotes', secretariatController.renderFormulaireSaisieNotes);
router.post('/saisirnotes', secretariatController.enregistrerNotes);
router.post('/affecterreferent', secretariatController.affecterReferent); 

router.use(logoutRoute);

module.exports = router;
