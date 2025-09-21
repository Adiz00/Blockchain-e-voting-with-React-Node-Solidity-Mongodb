const { signup, login, updateUserDetails, updateUserWallet } = require('../Controllers/AuthController');
const ensureAuthenticated = require('../Middlewares/Auth');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { updateUserValidation } = require('../Middlewares/UpdateUserValidation');

const router = require('express').Router();

router.patch('/update-user', ensureAuthenticated, updateUserDetails);

router.patch('/update-wallet', ensureAuthenticated, updateUserWallet);

module.exports = router;