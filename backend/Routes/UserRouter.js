const express = require('express');
const router = express.Router();
const { getUserData } = require('../Controllers/AuthController'); 
const ensureAuthenticated = require('../Middlewares/Auth');

router.get('/', ensureAuthenticated, getUserData);

module.exports = router;