const express = require('express');
const router = express.Router();
const secretariatController = require('../controller/secretariatController');
const logoutRoute = require('./logoutRoute');

router.get('/scolarite',secretariatController.renderListeEleve);

router.use(logoutRoute);

module.exports = router;
