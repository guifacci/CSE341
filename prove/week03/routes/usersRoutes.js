const express = require('express');
const usersController = require('../controllers/usersController');

//const router = express.Router();
const router = express.Router();


router.use(express.urlencoded({extended: false}));

//Handles the logins
router.get('/login', usersController.getLoginPage);
//Renders the admin page.
router.post('/login-user', usersController.postAdminPage);


module.exports = router;