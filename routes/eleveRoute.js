const express = require('express');
const router = express.Router();
const eleveScolariteController = require('../controller/eleveScolariteController');
const logoutRoute = require('./logoutRoute');

router.get('/scolarite', eleveScolariteController.renderScolarite);

router.use(logoutRoute);

module.exports = router;
