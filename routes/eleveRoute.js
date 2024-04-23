const express = require('express');
const router = express.Router();
const eleveController = require('../controller/eleveController');
const logoutRoute = require('./logoutRoute');

router.get('/scolarite', eleveController.renderScolarite);
router.get('/stage', eleveController.renderStage);
router.get('/projet', eleveController.renderProjet);

router.use(logoutRoute);

module.exports = router;
