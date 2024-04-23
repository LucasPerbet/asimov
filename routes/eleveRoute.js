const express = require('express');
const router = express.Router();
const eleveScolariteController = require('../controller/eleveScolariteController');
const eleveStageController = require('../controller/eleveStageController');
const logoutRoute = require('./logoutRoute');

router.get('/scolarite', eleveScolariteController.renderScolarite);
router.get('/stage', eleveStageController.renderStage);

router.use(logoutRoute);

module.exports = router;
