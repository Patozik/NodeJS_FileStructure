const express = require('express');
const router = new express.Router();
const UserController = require('../controllers/user-controller');
const PageController = require('../controllers/page-controller');

router.get('/', PageController.showHome);

router.get('/profile', UserController.showUsers);

router.get('/profile/:id/:mode?', UserController.showUser);

router.get('*', PageController.showNotFound);

module.exports = router;